using System.Text.Json;
using System.Text.Json.Serialization;
using System.Collections.Generic;

var builder = WebApplication.CreateBuilder(args);

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

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/projects", () =>
{
    var json = File.ReadAllText("Data/mock_projects.json");
    var projects = JsonSerializer.Deserialize<List<Project>>(json);
    return Results.Ok(projects);
})
.WithName("GetProjects")
.WithOpenApi();

app.Run();
