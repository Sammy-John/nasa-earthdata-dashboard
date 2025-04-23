using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace nasa_dashboard_api.Services
{
    public class NasaDataService
    {
        private readonly HttpClient _httpClient;

        public NasaDataService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<object> GetLandSurfaceTemperatureAsync(double latitude, double longitude)
        {
            var url = $"https://power.larc.nasa.gov/api/temporal/daily/point?parameters=T2M&community=AG&longitude={longitude}&latitude={latitude}&start=20230101&end=20230105&format=JSON";

            var response = await _httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();

            var jsonString = await response.Content.ReadAsStringAsync();
            using var jsonDoc = JsonDocument.Parse(jsonString);

            var root = jsonDoc.RootElement;
            var temperatures = root
                .GetProperty("properties")
                .GetProperty("parameter")
                .GetProperty("T2M");

            var result = new List<object>();

            foreach (var day in temperatures.EnumerateObject())
            {
                result.Add(new
                {
                    date = day.Name,
                    temperatureC = day.Value.GetDouble()
                });
            }

            return result;
        }
    }
}
