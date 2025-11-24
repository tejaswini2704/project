# 🚀 CI/CD Pipeline using GitHub Actions & Docker (No Cloud Required)

This project demonstrates a complete CI/CD pipeline that builds a Docker image from source code, pushes it to Docker Hub through **GitHub Actions**, and deploys the image locally using **Docker or Minikube** — all without using any cloud provider.

---

## 📁 Project Overview

| Feature | Status |
|--------|--------|
| GitHub repository hosted application | ✔ |
| CI/CD automation with GitHub Actions | ✔ |
| Docker containerization | ✔ |
| Docker Hub registry | ✔ |
| Local deployment using Docker / Minikube | ✔ |

---

## 🧩 Workflow Architecture

```

Developer → Push code to GitHub
↓
GitHub Actions → Build & Test → Create Docker Image → Push to Docker Hub
↓
Local Environment / Minikube → Pull Latest Image → Deploy Application

```

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Node.js | Backend application |
| Docker | Containerization |
| Docker Hub | Image storage |
| GitHub Actions | CI/CD automation |
| Docker / Minikube | Deployment environment |

---

## 📂 Project Structure

```

/ci-cd-demo
├─ server.js
├─ package.json
├─ Dockerfile
├─ docker-compose.yml (optional)
├─ deployment.yml (optional - for Kubernetes)
└─ .github/workflows/ci-cd.yml

````

---

## ▶ Local Development (Before CI/CD)

To run application manually:

```bash
npm install
npm start
````

Open in browser: **[http://localhost:3000](http://localhost:3000)**

---

## 🐳 Docker Build & Run (Manual Testing)

```bash
docker build -t ci-cd-project:latest .
docker run -d -p 3000:3000 ci-cd-project:latest
```

---

## 🔄 CI/CD Pipeline (GitHub Actions)

Whenever a commit is pushed to the **main** branch:

1. GitHub Actions checks out the code
2. Builds Docker image
3. Pushes the image to Docker Hub automatically

Workflow file: `.github/workflows/main.yml`

---

## 📦 Docker Deployment

### Option A — Deploy with Docker Only

```bash
docker pull <dockerhub-username>/ci-cd-project:latest
docker run -d -p 3000:3000 <dockerhub-username>/ci-cd-project:latest
```

### Option B — Deploy on Minikube (Kubernetes)

```bash
kubectl apply -f deployment.yml
kubectl expose deployment ci-cd-deployment --type=NodePort --port=3000
minikube service ci-cd-deployment
```

---

## 🔐 Secrets Used in GitHub Actions

| Secret               | Description                 |
| -------------------- | --------------------------- |
| `DOCKERHUB_USERNAME` | Docker Hub account username |
| `DOCKERHUB_TOKEN`    | Docker Hub access token     |

---

## 📸 Screenshots Required (for Documentation)

| Screenshot | Description                             |
| ---------- | --------------------------------------- |
| 1          | GitHub Actions workflow success         |
| 2          | Docker Hub repository image             |
| 3          | Running app in browser after deployment |

---
<img width="1878" height="623" alt="Screenshot 2025-11-24 211550" src="https://github.com/user-attachments/assets/db92a98d-4992-469d-849c-cef1138762b1" />

<img width="1884" height="878" alt="Screenshot 2025-11-24 211506" src="https://github.com/user-attachments/assets/0d73de7a-321f-496e-906f-7799c5e00964" />

<img width="1679" height="981" alt="Screenshot 2025-11-24 211324" src="https://github.com/user-attachments/assets/18711825-8d9d-4e86-b179-f7c1976fc34d" />

---
## 🏁 Outcome

✔ Complete CI/CD pipeline using GitHub Actions

✔ Automated Docker image building and pushing

✔ Zero cloud vendor dependency

✔ Demonstrates DevOps skills for portfolio / interviews

---

## 🙌 Author

**Tejaswini Shirke**

*DevOps | Cloud | Containerization Enthusiast*


