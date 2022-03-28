using AquaERP.API.AquaERP.Services.AquaBusiness;
using AquaERP.API.AquaERP.Services.AquaInterface;
using AquaERP.API.Repository;
using AquaERP.Model.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AquaERP.API
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
            services.AddControllers();
            services.AddDbContext<AquaERPContext>(option => option.UseSqlServer(Configuration.GetConnectionString("CVAquaERPdbConnection")));

            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));

            services.AddScoped<IHrContractorDetailBusiness, HrContractorDetailBusiness> ();

            services.AddSwaggerGen(swagger =>
            {
                swagger.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "AquaERP API",
                    Version = "v1.1",
                    Description = "API to unerstand request and response schema.",
                });
            });

            services.AddCors(options => options.AddDefaultPolicy(builder => builder.AllowAnyOrigin()
                                                                            .AllowAnyHeader()
                                                                            .AllowAnyMethod()));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }            

            app.UseRouting();
            app.UseCors();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "AquaERP API");
            });
        }
    }
}
