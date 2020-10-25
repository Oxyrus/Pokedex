using System;
using System.Threading.Tasks;

namespace Pokedex.Domain.Ports
{
    public interface IUpdateTrainerService
    {
        Task ExecuteAsync(Guid trainerId, string name, string email);
    }
}