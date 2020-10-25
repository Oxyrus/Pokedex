using Pokedex.Domain.Aggregates;
using Pokedex.Domain.Ports;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Pokedex.Domain.Services.TrainerServices
{
    public sealed class ListTrainersService : IListTrainersService
    {
        private readonly ITrainerRepository _trainerRepository;

        public ListTrainersService(ITrainerRepository trainerRepository)
        {
            _trainerRepository = trainerRepository;
        }

        public async Task<IEnumerable<Trainer>> ExecuteAsync()
        {
            return await _trainerRepository.ListAsync();
        }
    }
}
