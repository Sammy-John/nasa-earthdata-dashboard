namespace nasa_dashboard_api.Models
{
    public static class NasaLocations
    {
        public static readonly Dictionary<string, (double Latitude, double Longitude)> Locations = new()
        {
            { "Wellington", (-41.2865, 174.7762) },
            { "Auckland", (-36.8485, 174.7633) },
            { "Christchurch", (-43.5321, 172.6362) },
            { "Dunedin", (-45.8788, 170.5028) },
            { "Hamilton", (-37.7833, 175.2833) }
        };
    }
}
