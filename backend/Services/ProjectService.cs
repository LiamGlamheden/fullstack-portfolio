
using Microsoft.EntityFrameworkCore;

public class ProjectService
{
    private readonly AppDbContext _context;

    public ProjectService(AppDbContext context)
    {
        _context = context;
    }

    public List<Project> GetProjects()
    {
        return _context.Projects.ToList();
    }
}
