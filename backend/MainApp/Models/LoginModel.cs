using System.ComponentModel.DataAnnotations;

namespace IdentityServer.Models
{
    public class LoginModel
    {
        [Required]
        public string? Password { get; set; }

        [Required]
        [EmailAddress]
        public string? Email { get; set; }

        public string? ReturnUrl { get; set; }
    }
}
