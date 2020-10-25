using Pokedex.Domain.Aggregates;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Pokedex.Domain.Ports
{
    public interface ITrainerRepository
    {
        Task<Trainer> GetByIdAsync(Guid id);

        Task<Trainer> GetByEmailAsync(string email);

        void Create(Trainer trainer);

        Task<IEnumerable<Trainer>> ListAsync();

        IUnitOfWork UnitOfWork { get; }
    }
}
