using MediatR;
using Pokedex.Domain.Ports;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Pokedex.Application.Commands
{
    public sealed class UpdateTrainerCommandHandler : AsyncRequestHandler<UpdateTrainerCommand>
    {
        private readonly IUpdateTrainerService _updateTrainerService;

        public UpdateTrainerCommandHandler(IUpdateTrainerService updateTrainerService)
        {
            _updateTrainerService = updateTrainerService;
        }

        protected override async Task Handle(UpdateTrainerCommand request, CancellationToken cancellationToken)
        {
            if (request is null)
            {
                throw new ArgumentNullException(nameof(request));
            }

            await _updateTrainerService.ExecuteAsync(request.Id, request.Name, request.Email);
        }
    }
}
