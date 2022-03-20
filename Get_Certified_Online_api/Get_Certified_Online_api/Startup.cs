using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json.Serialization;
using System.IO;
using Microsoft.Extensions.FileProviders;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Get_Certified_Online_api.Entities;
using Get_Certified_Online_api.Repositories;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.HttpsPolicy;
using System.Text;
using Microsoft.AspNetCore.Cors;

namespace Get_Certified_Online_api
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
            //JSON Serializer
            //services.AddControllersWithViews()
            //    .AddNewtonsoftJson(options =>
            //    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft
            //    .Json.ReferenceLoopHandling.Ignore)
            //    .AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver
            //    = new DefaultContractResolver());

            services.AddDbContext<GetCertifiedOnline_DbContext>(options =>
              options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"))
           );
            services.AddTransient<IAdminRepository, AdminRepository>();
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IUserLoginRepository, UserLoginRepository>();

            services.AddControllers();

            var key = Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]);
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
        .AddJwtBearer(x =>
        {
            x.RequireHttpsMetadata = false;
            x.SaveToken = true;
            x.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false
            };
        });
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Get_Certified_Online_api", Version = "v1" });
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    In = ParameterLocation.Header,
                    Description = "Please enter token",
                    Name = "Authorization",
                    Type = SecuritySchemeType.Http,
                    BearerFormat = "JWT",
                    Scheme = "bearer"
                });
                c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id="Bearer"
                }
            },
            new string[]{}
        }
    });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(options =>
            options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            //app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Get_Certified_Online_api v1"));
            }
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
