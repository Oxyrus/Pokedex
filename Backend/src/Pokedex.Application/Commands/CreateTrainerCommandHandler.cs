using MediatR;
using Pokedex.Domain.Ports;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Pokedex.Application.Commands
{
    public sealed class CreateTrainerCommandHandler : AsyncRequestHandler<CreateTrainerCommand>
    {
        private readonly ICreateTrainerService _createTrainerService;

        public CreateTrainerCommandHandler(ICreateTrainerService createTrainerService)
        {
            _createTrainerService = createTrainerService;
        }

        protected override async Task Handle(CreateTrainerCommand request, CancellationToken cancellationToken)
        {
            if (request is null)
            {
                throw new ArgumentNullException(nameof(request));
            }

            await _createTrainerService.ExecuteAsync(request.Name, request.Email);
        }
    }
}
