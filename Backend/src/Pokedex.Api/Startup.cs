using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Pokedex.Application.Commands;
using Pokedex.Domain.Ports;
using Pokedex.Domain.Services.TrainerServices;
using Pokedex.Infrastructure;
using Pokedex.Infrastructure.Repositories;
using System.Reflection;

namespace Pokedex.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<PokedexContext>(options => options.UseInMemoryDatabase("Pokedex"));

            services.AddScoped<ITrainerRepository, TrainerRepository>();

            services.AddScoped<ICreateTrainerService, CreateTrainerService>();
            services.AddScoped<IListTrainersService, ListTrainersService>();
            services.AddScoped<IUpdateTrainerService, UpdateTrainerService>();

            services.AddMediatR(typeof(CreateTrainerCommand).GetTypeInfo().Assembly);

            services.AddControllers();

            services.AddSwaggerGen(config =>
            {
                config.SwaggerDoc("v1", new OpenApiInfo { Title = "Pokedex API", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSwagger();
            app.UseSwaggerUI(config =>
            {
                config.SwaggerEndpoint("/swagger/v1/swagger.json", "Pokedex v1");
            });

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(configurePolicy =>
            {
                configurePolicy.AllowAnyOrigin();
                configurePolicy.AllowAnyMethod();
                configurePolicy.AllowAnyHeader();
            });

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
