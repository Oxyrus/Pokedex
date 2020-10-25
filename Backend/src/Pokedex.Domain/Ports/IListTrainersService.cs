using Pokedex.Domain.Aggregates;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Pokedex.Domain.Ports
{
    public interface IListTrainersService
    {
        Task<IEnumerable<Trainer>> ExecuteAsync();
    }
}