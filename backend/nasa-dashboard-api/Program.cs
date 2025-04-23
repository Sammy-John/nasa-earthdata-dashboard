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



// Add controller services
builder.Services.AddControllers();

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

app.UseAuthorization();

// Tell the app to use controller routes!
app.MapControllers();

app.Run();
