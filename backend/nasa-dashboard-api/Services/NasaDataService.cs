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

        public async Task<object> GetLandSurfaceTemperatureAsync(double latitude, double longitude, string start, string end)
        {
            var url = $"https://power.larc.nasa.gov/api/temporal/daily/point" +
                    $"?parameters=T2M&community=AG&longitude={longitude}&latitude={latitude}" +
                    $"&start={start}&end={end}&format=JSON";

            var response = await _httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();

            var jsonString = await response.Content.ReadAsStringAsync();
            using var jsonDoc = JsonDocument.Parse(jsonString);
            var root = jsonDoc.RootElement;

            // ✅ Check messages first:
            if (root.TryGetProperty("messages", out var messages) && messages.GetArrayLength() > 0)
            {
                return new { error = "NASA API returned messages: " + messages[0].GetString() };
            }

            // ✅ Safely check if T2M exists:
            if (!root.TryGetProperty("properties", out var properties) ||
                !properties.TryGetProperty("parameter", out var parameter) ||
                !parameter.TryGetProperty("T2M", out var temperatures))
            {
                return new { error = "No temperature data found for the provided range." };
            }

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
