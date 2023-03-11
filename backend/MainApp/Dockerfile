#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app

EXPOSE 8083

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["MainApp.csproj", "MainApp/"]
RUN dotnet restore "MainApp/MainApp.csproj"
WORKDIR "/src/MainApp"
COPY . .
RUN dotnet build "MainApp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MainApp.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["/root/.aspnet/https/cert-signature.sh"]