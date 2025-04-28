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

        public async Task<object> GetNasaDataAsync(double latitude, double longitude, string start, string end, string parameter)
        {
            var url = $"https://power.larc.nasa.gov/api/temporal/daily/point" +
                    $"?parameters={parameter}&community=AG&longitude={longitude}&latitude={latitude}" +
                    $"&start={start}&end={end}&format=JSON";

            var response = await _httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();

            var jsonString = await response.Content.ReadAsStringAsync();
            using var jsonDoc = JsonDocument.Parse(jsonString);
            var root = jsonDoc.RootElement;

            if (!root.TryGetProperty("properties", out var properties) ||
                !properties.TryGetProperty("parameter", out var paramElement) ||
                !paramElement.TryGetProperty(parameter, out var dataPoints))
            {
                return new { error = "No data found for the selected parameter." };
            }

            var result = new List<object>();
            foreach (var day in dataPoints.EnumerateObject())
            {
                result.Add(new
                {
                    date = day.Name,
                    value = day.Value.GetDouble()
                });
            }

            return result;
        }
    }
}
