using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

// Add CORS and Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// 1. Bind to the Render-provided port (or fallback to 5000 locally)
var port = Environment.GetEnvironmentVariable("PORT") ?? "5000";
app.Urls.Clear();
app.Urls.Add($"http://*:{port}");

// 2. Enable CORS and HTTPS redirect
app.UseCors("AllowAll");
app.UseHttpsRedirection();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// 3. Your mock-data endpoint
app.MapGet("/api/projects", () =>
{
    try
    {
        var filePath = Path.Combine(AppContext.BaseDirectory, "Data", "mock_projects.json");
        if (!File.Exists(filePath))
            return Results.Problem("File not found: " + filePath);

        var json = File.ReadAllText(filePath);
        var projects = JsonSerializer.Deserialize<List<Project>>(json);
        return Results.Ok(projects);
    }
    catch (Exception ex)
    {
        return Results.Problem("Error reading projects: " + ex.Message);
    }
})
.WithName("GetProjects")
.WithOpenApi();

app.Run();
