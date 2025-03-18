using Microsoft.AspNetCore.Mvc;
using NewsPortalApi.Data;
using NewsPortalApi.Models;

namespace NewsPortalApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CommentController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CommentController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("create")]
        public async Task<IActionResult> AddComment(Comment comment)
        {
            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Comment added successfully!" });
        }
    }
}
