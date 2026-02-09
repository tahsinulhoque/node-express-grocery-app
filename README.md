# 🛒 Node.js Grocery App – DevOps Oriented Backend
![CI](https://github.com/tahsinulhoque/node-express-grocery-app/actions/workflows/node.yml/badge.svg)


A DevOps-focused backend project built with **Node.js and Express**, designed to demonstrate real-world practices such as **CI pipelines, Docker containerization, and image publishing**.

This project focuses not only on application development but also on making the service **production-ready using DevOps workflows**.

---

## 🚀 Features

- RESTful API built with Node.js & Express  
- Clean project structure and dependency management  
- Git & GitHub based version control  
- Continuous Integration using GitHub Actions  
- Multi-version Node.js testing (CI matrix build)  
- Dependency security audit using npm  
- Dockerized application using Dockerfile  
- Docker image published to Docker Hub  

---

## 🏗️ Architecture Overview

![Project Architecture](./architecture.png)

This diagram represents the complete DevOps workflow of the project, including
source control, CI pipeline, Docker image creation, and container execution.

**High-level workflow:**

This architecture ensures code quality, security checks, and portability across environments.

---

## 🧪 CI Pipeline (GitHub Actions)

The CI pipeline is triggered on every push and pull request and performs:

- Dependency installation  
- Basic build verification  
- Security audit (`npm audit`)  
- Multi-version Node.js testing (18.x, 20.x, 22.x)

This helps ensure stability and security before deployment.

---

## 🐳 Docker Setup

### Build Docker Image
```bash
docker build -t grocery-app .
docker run -p 5000:5000 grocery-app
http://localhost:5000



## ⚠️ Challenges & Learnings
- During this project, I worked through several real-world challenges:
- Debugging GitHub Actions pipeline hangs
- Handling Node.js version compatibility
- Fixing Docker build issues caused by Linux case-sensitivity
- Resolving Docker and WSL configuration issues on Windows
- Understanding Docker build context and file handling
- These experiences improved my debugging, log analysis, and DevOps troubleshooting skills.


## 🔮 Future Improvements

- Automate Docker image build & push using GitHub Actions (CI → CD)
- Introduce Docker Compose for multi-service architecture
- Deploy the container to cloud platforms (AWS EC2 / ECS)
- Add API testing using Jest and Supertest
- Integrate monitoring and logging solutions

## 📌 Tech Stack

- Node.js
- Express.js
- Git & GitHub
- GitHub Actions
- Docker
- Docker Hub