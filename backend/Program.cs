using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:3000", "https://din-frontend-url.com") // frontend URL
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors("AllowFrontend");

app.UseHttpsRedirection();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

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
