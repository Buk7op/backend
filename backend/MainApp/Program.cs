using Microsoft.AspNetCore.Authentication.JwtBearer;

var builder = WebApplication.CreateBuilder(args);

var services = builder.Services;

services.AddControllers();
services.AddEndpointsApiExplorer();
services.AddSwaggerGen();



services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme);
services.AddAuthentication(options =>
    {
        options.DefaultScheme = "Cookies";
        options.DefaultChallengeScheme = "oidc";
    }).AddCookie("Cookies")
    .AddJwtBearer(options =>
    {
        options.Authority = "https://identityserver:8081";
        options.Audience = "IS4API";
    }).AddOpenIdConnect("oidc", options =>
    {
        options.Authority = "https://identityserver:8081";
        options.MetadataAddress = "https://identityserver:8081/.well-known/openid-configuration";
        options.ClientId = "MainApp";
        options.ResponseType = "code";
        options.Scope.Add("openid");
        options.Scope.Add("profile");
        options.Scope.Add("fullaccess");
        options.SaveTokens = true;
    });


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
