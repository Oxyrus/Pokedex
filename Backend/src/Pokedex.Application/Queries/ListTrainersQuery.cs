using MediatR;
using Pokedex.Domain.Aggregates;
using System.Collections.Generic;

namespace Pokedex.Application.Queries
{
    public sealed class ListTrainersQuery : IRequest<IEnumerable<Trainer>>
    {
    }
}
