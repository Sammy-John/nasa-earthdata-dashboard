using Microsoft.AspNetCore.Mvc;
using nasa_dashboard_api.Services;

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

        // ✅ Updated endpoint with query parameters:
        [HttpGet("land-surface-temperature")]
        public async Task<IActionResult> GetLandSurfaceTemperature(
            [FromQuery] double latitude,
            [FromQuery] double longitude,
            [FromQuery] string start,
            [FromQuery] string end)
        {
            // ✅ Validation for required date fields
            if (string.IsNullOrEmpty(start) || string.IsNullOrEmpty(end))
            {
                return BadRequest(new { error = "Start and End dates are required." });
            }

            // ✅ Reformat dates from 'YYYY-MM-DD' to 'YYYYMMDD' for NASA API
            var startFormatted = start.Replace("-", "");
            var endFormatted = end.Replace("-", "");

            try
            {
                var result = await _nasaDataService.GetLandSurfaceTemperatureAsync(latitude, longitude, startFormatted, endFormatted);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = "Error fetching data from NASA API.", details = ex.Message });
            }
        }
    }
}
