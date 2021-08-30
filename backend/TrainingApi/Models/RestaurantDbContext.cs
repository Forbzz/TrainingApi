using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace TrainingApi.Models
{
    public class RestaurantDbContext:IdentityDbContext<User>
    {
        public RestaurantDbContext(DbContextOptions<RestaurantDbContext> options):base(options)
        {

        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<FoodItem> FoodItems { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public DbSet<OrderMaster> OrderMasters { get; set; }
    }
}
