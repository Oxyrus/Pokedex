using Microsoft.EntityFrameworkCore;
using Pokedex.Domain.Aggregates;
using Pokedex.Domain.Ports;

namespace Pokedex.Infrastructure
{
    public sealed class PokedexContext : DbContext, IUnitOfWork
    {
        public PokedexContext(DbContextOptions options) : base(options) { }

        public DbSet<Trainer> Trainers { get; private set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // This is supposed to work but it doesn't the project uses an in memory database
            // see https://github.com/dotnet/efcore/issues/2166
            modelBuilder.Entity<Trainer>()
                .HasIndex(trainer => trainer.Email)
                .IsUnique();

            base.OnModelCreating(modelBuilder);
        }
    }
}
