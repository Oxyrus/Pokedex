using Microsoft.EntityFrameworkCore;
using Pokedex.Domain.Aggregates;
using Pokedex.Domain.Ports;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Pokedex.Infrastructure.Repositories
{
    public sealed class TrainerRepository : ITrainerRepository
    {
        private readonly PokedexContext _pokedexContext;

        public TrainerRepository(PokedexContext pokedexContext)
        {
            _pokedexContext = pokedexContext;
        }

        public IUnitOfWork UnitOfWork => _pokedexContext;

        public async Task<Trainer> GetByIdAsync(Guid id)
        {
            return await _pokedexContext.Trainers.SingleAsync(trainer => trainer.Id == id);
        }

        public async Task<Trainer> GetByEmailAsync(string email)
        {
            return await _pokedexContext.Trainers.FirstOrDefaultAsync(trainer => trainer.Email == email);
        }

        public void Create(Trainer trainer)
        {
            _pokedexContext.Trainers.Add(trainer);
        }

        public async Task<IEnumerable<Trainer>> ListAsync()
        {
            return await _pokedexContext.Trainers.ToArrayAsync();
        }
    }
}
