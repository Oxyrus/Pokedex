using Pokedex.Domain.Ports;
using System;
using System.Threading.Tasks;

namespace Pokedex.Domain.Services.TrainerServices
{
    public sealed class UpdateTrainerService : IUpdateTrainerService
    {
        private readonly ITrainerRepository _trainerRepository;

        public UpdateTrainerService(ITrainerRepository trainerRepository)
        {
            _trainerRepository = trainerRepository;
        }

        public async Task ExecuteAsync(Guid trainerId, string name, string email)
        {
            var trainer = await _trainerRepository.GetByIdAsync(trainerId);
            if (trainer is null)
            {
                throw new InvalidOperationException();
            }

            trainer.UpdateDetails(name, email);

            await _trainerRepository.UnitOfWork.SaveChangesAsync();
        }
    }
}
