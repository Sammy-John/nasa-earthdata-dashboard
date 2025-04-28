using Microsoft.AspNetCore.Mvc;
using nasa_dashboard_api.Services;
using nasa_dashboard_api.Models;

namespace nasa_dashboard_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NasaDataController : ControllerBase
    {
        private readonly NasaDataService _nasaDataService;

        public NasaDataController(NasaDataService nasaDataService)
        {
            _nasaDataService = nasaDataService;
        }

        [HttpGet("health")]
        public IActionResult HealthCheck()
        {
            return Ok(new { status = "API is up and running!" });
        }

        // ✅ Endpoint to provide list of available locations:
        [HttpGet("locations")]
        public IActionResult GetAvailableLocations()
        {
            var locations = NasaLocations.Locations.Keys;
            return Ok(locations);
        }

        // ✅ Generic endpoint to get data (Temperature or Vegetation Index):
        [HttpGet("nasa-data")]
        public async Task<IActionResult> GetNasaData(
            [FromQuery] string location,
            [FromQuery] string start,
            [FromQuery] string end,
            [FromQuery] string parameter)
        {
            if (string.IsNullOrEmpty(location) || string.IsNullOrEmpty(start) || string.IsNullOrEmpty(end) || string.IsNullOrEmpty(parameter))
            {
                return BadRequest(new { error = "Location, start date, end date, and parameter are required." });
            }

            if (!NasaLocations.Locations.TryGetValue(location, out var coords))
            {
                return BadRequest(new { error = "Invalid location specified." });
            }

            var startFormatted = start.Replace("-", "");
            var endFormatted = end.Replace("-", "");

            try
            {
                var result = await _nasaDataService.GetNasaDataAsync(coords.Latitude, coords.Longitude, startFormatted, endFormatted, parameter);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = "Error fetching data from NASA API.", details = ex.Message });
            }
        }
    }
}
