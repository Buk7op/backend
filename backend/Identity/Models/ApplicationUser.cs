using AspNetCore.Identity.MongoDbCore.Models;
using MongoDbGenericRepository.Attributes;
using System.ComponentModel.DataAnnotations;

namespace Identity.Models 
{
    [CollectionName("Users")]
    public class ApplicationUser : MongoIdentityUser<Guid> 
    {

    }
}