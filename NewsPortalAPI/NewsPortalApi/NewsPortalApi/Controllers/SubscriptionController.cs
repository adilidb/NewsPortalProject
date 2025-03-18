using Microsoft.AspNetCore.Mvc;
using NewsPortalApi.Data;
using NewsPortalApi.Models;

namespace NewsPortalApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SubscriptionController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SubscriptionController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("subscribe")]
        public async Task<IActionResult> Subscribe(Subscription subscription)
        {
            _context.Subscriptions.Add(subscription);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Subscription successful!" });
        }
    }
}
