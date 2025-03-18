using NewsPortalApi.Models;

namespace NewsPortalApi.Services
{
    public interface INewsService
    {
        Task<IEnumerable<News>> GetAllNewsAsync();
        Task<News> GetNewsByIdAsync(int id);
        Task<News> CreateNewsAsync(News news);
        Task<News> UpdateNewsAsync(News news);
        Task<bool> DeleteNewsAsync(int id);
    }
}
