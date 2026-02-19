# API Tester (Postman-like App)

A full-stack API testing application built to understand how real-world frontend, backend, and containerized systems work together.  
The app allows users to send HTTP requests and inspect responses with status codes, timing, and payload details.

---

## 🚀 Features

- Send HTTP requests (GET, POST, PUT, DELETE)
- Custom request headers and body
- Displays:
  - Response data
  - HTTP status code with meaning
  - Response time
- Clean UI for testing APIs
- Fully Dockerized (frontend + backend)

---

## 🛠 Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS / DaisyUI
- Axios

### Backend
- Node.js
- Express
- TypeScript

### DevOps
- Docker
- Docker Compose
- Nginx (production frontend server)

---

## 📦 Project Structure

api-tester/
├── client/ # React app
│ ├── Dockerfile
│ └── src/
├── server/ # Express 
│ ├── Dockerfile
│ └── src/
├── docker-compose.yml
└── README.md


---

## 🐳 Running the App with Docker (Recommended)

### Prerequisites
- Docker
- Docker Compose

### Build & Run
```bash
docker-compose up --build

## 🌐 Ports

| Service   | Port | Description |
|----------|------|-------------|
| Frontend | 51773 | React UI  |
| Backend  | 5000  | API server |


