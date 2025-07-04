using System.Text.Json;
using System.Text.Json.Serialization;

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

app.UseCors("AllowAll");
app.UseHttpsRedirection();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Endpoint to get projects
app.MapGet("/api/projects", () =>
{
    var path = Path.Combine(Directory.GetCurrentDirectory(), "Data", "mock_projects.json");
    if (!File.Exists(path))
    {
        return Results.Problem($"File not found: {path}");
    }

    var json = File.ReadAllText(path);

    if (string.IsNullOrEmpty(json))
    {
        return Results.Problem("JSON file is empty.");
    }

    List<Project>? projects = null;
    try
    {
        projects = JsonSerializer.Deserialize<List<Project>>(json);
    }
    catch (Exception ex)
    {
        return Results.Problem($"JSON deserialization failed: {ex.Message}");
    }

    if (projects == null)
    {
        return Results.Problem("Projects deserialized to null.");
    }

    return Results.Ok(projects);
})


.WithName("GetProjects")
.WithOpenApi();

app.Run();
