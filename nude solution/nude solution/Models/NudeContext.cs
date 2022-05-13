using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace nude_solution.Models
{
    public class NudeContext : DbContext
    {
        public NudeContext(DbContextOptions<NudeContext> options)
            : base(options)
        {
        }

        public DbSet<Item> Items { get; set; } = null!;
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<Category> Categories { get; set; } = null!;
    }
}
