using MediatR;
using System.ComponentModel.DataAnnotations;

namespace Pokedex.Application.Commands
{
    public sealed class CreateTrainerCommand : IRequest
    {
        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
