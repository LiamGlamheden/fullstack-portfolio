using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    [HttpPost]
    public IActionResult SendMessage([FromBody] ContactMessage message)
    {
        if (string.IsNullOrWhiteSpace(message.Name) ||
            string.IsNullOrWhiteSpace(message.Email) ||
            string.IsNullOrWhiteSpace(message.Message))
        {
            return BadRequest("All fields are required.");
        }

       
        Console.WriteLine($"New message from {message.Name} ({message.Email}): {message.Message}");

        return Ok(new { success = true, message = "Message received!" });
    }
}
