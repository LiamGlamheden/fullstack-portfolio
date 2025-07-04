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
    var json = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Data", "mock_projects.json"));
    var projects = JsonSerializer.Deserialize<List<Project>>(json);
    return Results.Ok(projects);
})

.WithName("GetProjects")
.WithOpenApi();

app.Run();
