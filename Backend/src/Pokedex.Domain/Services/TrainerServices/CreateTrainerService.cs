using Pokedex.Domain.Aggregates;
using Pokedex.Domain.Ports;
using System;
using System.Threading.Tasks;

namespace Pokedex.Domain.Services.TrainerServices
{
    public sealed class CreateTrainerService : ICreateTrainerService
    {
        private readonly ITrainerRepository _trainerRepository;

        public CreateTrainerService(ITrainerRepository trainerRepository)
        {
            _trainerRepository = trainerRepository;
        }

        public async Task ExecuteAsync(string name, string email)
        {
            var existingTrainer = await _trainerRepository.GetByEmailAsync(email);
            if (existingTrainer is null)
            {
                var trainer = new Trainer(name, email);
                _trainerRepository.Create(trainer);
                await _trainerRepository.UnitOfWork.SaveChangesAsync();
            }
            else
            {
                throw new InvalidOperationException("The email is already being used.");
            }
        }
    }
}
