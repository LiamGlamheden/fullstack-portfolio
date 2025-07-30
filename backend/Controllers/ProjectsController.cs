using Microsoft.AspNetCore.Mvc;
[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly ProjectService _projectService;

    public ProjectsController(ProjectService projectService)
    {
        _projectService = projectService;
    }

    [HttpGet]
    public IActionResult Get()
    {
        var projects = _projectService.GetProjects();
        return Ok(projects);
    }
}
