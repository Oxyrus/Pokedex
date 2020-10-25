using MediatR;
using Pokedex.Domain.Aggregates;
using Pokedex.Domain.Ports;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Pokedex.Application.Queries
{
    public sealed class ListTrainersQueryHandler : IRequestHandler<ListTrainersQuery, IEnumerable<Trainer>>
    {
        private readonly IListTrainersService _listTrainersService;

        public ListTrainersQueryHandler(IListTrainersService listTrainersService)
        {
            _listTrainersService = listTrainersService;
        }

        public async Task<IEnumerable<Trainer>> Handle(ListTrainersQuery request, CancellationToken cancellationToken)
        {
            if (request is null)
            {
                throw new ArgumentNullException(nameof(request));
            }

            return await _listTrainersService.ExecuteAsync();
        }
    }
}
