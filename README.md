# Todo App

Simple Todo application with separate `client` (React + Vite + Tailwind) and `server` (Node/Express) folders.

## Prerequisites
- Node.js (16+ recommended)
- npm (comes with Node)

## Install
From the repo root, install server and client dependencies:

```powershell
cd "C:\Users\astha\OneDrive\Desktop\Todo app\server"
npm install

cd "C:\Users\astha\OneDrive\Desktop\Todo app\client"
npm install
```

## Run (development)

Start server (from `server`):

```powershell
cd server
npm run dev
# or: node app.js
```

Start client (from `client`):

```powershell
cd client
npm run dev
```

Open const API_URL = import.meta.env.VITE_API_URL; for the client and whichever port the server logs for API endpoints.

## Build

Build client:

```powershell
cd client
npm run build
```

## Git / Deployment
- A `.gitignore` is provided — ensure you add a remote before pushing:

```powershell
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```
