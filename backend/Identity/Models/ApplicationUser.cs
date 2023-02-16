using AspNetCore.Identity.MongoDbCore.Models;
using MongoDbGenericRepository.Attributes;

namespace Identity.Models 
{
    [CollectionName("Users")]
    public class ApplicationUser : MongoIdentityUser<Guid> 
    {

    }
}