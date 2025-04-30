using Microsoft.OpenApi.Models;
using nasa_dashboard_api.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo { Title = "NASA EarthData API", Version = "v1" });
});
builder.Services.AddHttpClient<NasaDataService>();

// ✅ Add Controllers
builder.Services.AddControllers();

// ✅ Add CORS Policy Here:
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:4200")   // Your Angular frontend origin
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "NASA EarthData API V1");
    });
}

app.UseHttpsRedirection();

app.UseCors();                                        // ✅ Enable CORS here!

app.UseAuthorization();

app.MapControllers();                                 // ✅ Route your controllers

var port = Environment.GetEnvironmentVariable("PORT") ?? "5016";
app.Urls.Add($"http://*:{port}");
app.Run();

