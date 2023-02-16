using AspNetCore.Identity.MongoDbCore.Models;
using MongoDbGenericRepository.Attributes;

namespace Identity.Models 
{
    [CollectionName("Roles")]
    public class ApplicationRole : MongoIdentityRole<Guid> 
    {

    }
}