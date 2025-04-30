# 🌍 NASA EarthData Dashboard

A minimal, responsive dashboard that visualizes **NASA EarthData** for **New Zealand**, focusing on:

- 🌡️ **Land Surface Temperature (LST)**

This project pulls data from **NASA Open APIs** and presents it through interactive charts and maps for quick insights.

## 🚀 Purpose

The goal is to create a simple MVP (Minimum Viable Product) in **4 days** that demonstrates:

- Backend API service (built with **.NET Core Web API**)
- Frontend dashboard (built with **SvelteKit**)
- Visualization of LST and NDVI data over New Zealand regions

## 📂 Project Structure

```
nasa-earthdata-dashboard/
├── backend/          # .NET Core Web API
├── frontend/         # SvelteKit Frontend
├── docs/             # Scope, Requirements, and Documentation
├── scripts/          # Helper or setup scripts
├── README.md         # This file
├── LICENSE           # Apache 2.0 License
└── .gitignore        # Ignore config for VS, Node, SvelteKit
```

## 💻 Frontend Setup 

### ✅ Prerequisites:
- Node.js + npm
- Angular CLI (optional global install):
```bash
npm install -g @angular/cli
```

### 📦 Install Dependencies:

```bash
cd frontend/nasa-dashboard-ui
npm install
```

### 🟢 Run Dev Server:
```bash
npm start
```

Frontend will run at :
```bash
http://localhost:4200/
```
## 🚀 Backend Setup (.NET Core API)
### ✅ Run the Backend:

```bash
cd backend/nasa-dashboard-api
dotnet run
```
API available at:
```bash
http://localhost:5016/swagger
```

### 📌 Key Endpoint:

```bash
GET /api/nasadata/land-surface-temperature
```

Returns temperature for hardcoded co-ordinates (Wellington, New Zealand)

## 📝 License

This project is licensed under the **Apache 2.0 License**.

---

> MVP Focus: Keep it simple. Prioritize core functionality and data visualization over extra features.
