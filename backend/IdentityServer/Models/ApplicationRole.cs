using AspNetCore.Identity.MongoDbCore.Models;
using MongoDbGenericRepository.Attributes;

namespace IdentityServer.Models 
{
    [CollectionName("Roles")]
    public class ApplicationRole : MongoIdentityRole<Guid> 
    {

    }
}