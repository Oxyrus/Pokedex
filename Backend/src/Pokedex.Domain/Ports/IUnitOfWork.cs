using System.Threading;
using System.Threading.Tasks;

namespace Pokedex.Domain.Ports
{
    public interface IUnitOfWork
    {
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    }
}
