using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly ProjectService _projectService;

    public ProjectsController()
    {
        _projectService = new ProjectService();
    }

    [HttpGet]
    public IActionResult Get()
    {
        var projects = _projectService.GetProjects();
        return Ok(projects);
    }
}
