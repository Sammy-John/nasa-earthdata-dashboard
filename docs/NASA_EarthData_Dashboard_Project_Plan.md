
# 🌍 NASA EarthData Dashboard MVP

**Project Duration:** 4 Days  
**Focus:** New Zealand Land Surface Temperature (LST) & Vegetation Index (NDVI) Dashboard

---

## 🚀 Project Goal
Deliver a working MVP dashboard that visualizes NASA EarthData for New Zealand using Land Surface Temperature and Vegetation Index datasets. Focus on functionality, simplicity, and core data visualization.

---

## 🗓️ Timeline (4 Days)

| Day  | Focus Area                       | Tasks                                          | Outcome                                   |
|------|-----------------------------------|------------------------------------------------|--------------------------------------------|
| 1    | 🚧 Setup + Data Pipeline          | - Setup project structure (backend + frontend)<br>- Identify NASA API endpoints for LST & NDVI<br>- Build service to fetch static sample data<br>- Verify data shape and structure              | Working backend service with sample NASA data pulled, parsed, and available to the frontend. |
| 2    | 📊 Core Data Visualization       | - Implement frontend dashboard scaffold<br>- Display basic charts (line chart for LST, bar/area chart for NDVI)<br>- Dropdown to select dataset (LST / NDVI)<br>- Data for New Zealand only | MVP dashboard with NASA data and basic interactivity. |
| 3    | 🌿 Map Integration + Filtering    | - Integrate map view (Leaflet or OpenLayers)<br>- Overlay LST/NDVI data<br>- Add basic time filter (e.g., by month/date range)<br>- Responsive layout adjustments | Interactive map added. Users can filter data by date. |
| 4    | 🧹 Polish + Documentation        | - Add loading/error states<br>- Write README with setup instructions<br>- Include screenshots/demo<br>- Final cleanup and testing | Clean, working MVP ready to share and documented. |

---

## 📂 MVP Feature Scope

| Feature                   | Included in MVP? | Notes                                  |
|----------------------------|-----------------|-----------------------------------------|
| Fetch NASA LST & NDVI data | ✅               | Cached static sample data for development. |
| Line/Bar Charts            | ✅               | Basic visualization for both datasets.  |
| Map with data overlay      | ✅               | Raster tile or region-based overlays.   |
| Filter by time             | ✅               | Simple month/date filtering.            |
| User accounts / login      | ❌               | Not included in MVP.                    |
| Multiple regions           | ❌               | New Zealand only for MVP.               |
| Advanced analytics         | ❌               | Outside MVP scope.                      |

---

## 🛠️ Tech Stack

| Component          | Technology           | Rationale                          |
|--------------------|----------------------|-------------------------------------|
| Backend             | C# / .NET API        | Reliable, familiar stack, handles data fetching. |
| Database (optional) | SQLite               | For local data caching if required. |
| Frontend            | SvelteKit / Angular  | Lightweight, rapid development cycle. |
| Visualization       | Chart.js / D3.js     | Effective for MVP charting needs.   |
| Map Integration     | Leaflet / OpenLayers | Simple mapping solution with raster overlays. |

---

## ✅ Success Criteria

- [ ] NASA data fetched successfully.
- [ ] LST & NDVI data visualized via charts.
- [ ] Map view with overlays functional.
- [ ] Time filtering operational.
- [ ] README written with setup and usage instructions.
- [ ] MVP demonstrated via screenshots/demo.

---

*Generated on 2025-04-23*
