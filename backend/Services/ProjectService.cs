using Newtonsoft.Json;

public class ProjectService
{
    private readonly string _filePath = "Data/mock_projects.json";

    public List<Project> GetProjects()
    {
        var json = File.ReadAllText(_filePath);
        return JsonConvert.DeserializeObject<List<Project>>(json);
    }
}
