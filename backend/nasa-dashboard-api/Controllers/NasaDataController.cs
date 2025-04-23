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

        [HttpGet("land-surface-temperature")]
        public async Task<IActionResult> GetLandSurfaceTemperature()
        {
            // Example coordinates: Wellington, NZ
            var result = await _nasaDataService.GetLandSurfaceTemperatureAsync(-41.2865, 174.7762);
            return Ok(result);
        }
    }
}
