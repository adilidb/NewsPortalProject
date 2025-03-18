using Microsoft.AspNetCore.Mvc;
using NewsPortalApi.Models;
using NewsPortalApi.Services;

namespace NewsPortalApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NewsController : ControllerBase
    {
        private readonly INewsService _newsService;

        public NewsController(INewsService newsService)
        {
            _newsService = newsService;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllNews()
        {
            var news = await _newsService.GetAllNewsAsync();
            return Ok(news);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetNewsById(int id)
        {
            var news = await _newsService.GetNewsByIdAsync(id);
            if (news == null) return NotFound();
            return Ok(news);
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateNews([FromBody] News news)
        {
            var createdNews = await _newsService.CreateNewsAsync(news);
            return CreatedAtAction(nameof(GetNewsById), new { id = createdNews.Id }, createdNews);
        }

        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateNews(int id, [FromBody] News news)
        {
            if (id != news.Id) return BadRequest();

            var updatedNews = await _newsService.UpdateNewsAsync(news);
            return Ok(updatedNews);
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteNews(int id)
        {
            var result = await _newsService.DeleteNewsAsync(id);
            if (!result) return NotFound();
            return NoContent();
        }
    }
}
