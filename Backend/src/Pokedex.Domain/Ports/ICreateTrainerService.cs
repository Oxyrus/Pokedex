using System.Threading.Tasks;

namespace Pokedex.Domain.Ports
{
    public interface ICreateTrainerService
    {
        Task ExecuteAsync(string name, string email);
    }
}