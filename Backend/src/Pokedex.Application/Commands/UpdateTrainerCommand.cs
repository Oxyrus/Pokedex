using MediatR;
using System;
using System.ComponentModel.DataAnnotations;

namespace Pokedex.Application.Commands
{
    public sealed class UpdateTrainerCommand : IRequest
    {
        [Required]
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
