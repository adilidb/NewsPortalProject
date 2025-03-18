using System.ComponentModel.DataAnnotations;

namespace NewsPortalApi.Models
{
    public class Subscription
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Email { get; set; }
        public DateTime SubscribedAt { get; set; } = DateTime.Now;
    }
}
