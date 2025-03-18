using System.ComponentModel.DataAnnotations;

namespace NewsPortalApi.Models
{
    public class News
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Content { get; set; }
        public string ImageUrl { get; set; }
        [Required]
        public DateTime PublishedAt { get; set; }
    }
}
