# Fullstack Portfolio

A fullstack portfolio application built with ASP.NET Core Web API, React, TypeScript, PostgreSQL, and Docker.

## Tech Stack

| Layer      | Tech                                |
|------------|-------------------------------------|
| Backend    | C# + ASP.NET Core Web API           |
| Frontend   | React + TypeScript                  |
| Database   | PostgreSQL                          |
| Styling    | Tailwind CSS                        |
| DevOps     | Docker + GitHub Actions             |
| Hosting    | Railway / Render / Azure App Services |

## Features

- Showcases projects, skills, and contact information.
- RESTful API built with ASP.NET Core.
- Responsive frontend using React and Tailwind CSS.
- PostgreSQL database with Dockerized setup.
- CI/CD pipeline with GitHub Actions.

## Getting Started

### Prerequisites

- .NET SDK
- Node.js
- Docker
- PostgreSQL

### Run Locally

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/fullstack-portfolio.git
cd fullstack-portfolio

# Start backend
cd backend/PortfolioAPI
dotnet run

# Start frontend
cd ../../frontend/portfolio-frontend
npm install
npm start
