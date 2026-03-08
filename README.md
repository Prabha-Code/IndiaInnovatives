# UrbanProof Sentinel Mesh

A full-stack demo for urban pollution monitoring and hotspot detection.

## Tech Stack

- **Frontend**: React, Tailwind CSS, Recharts, Leaflet
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Features

- Interactive pollution heatmap
- Hotspot cards
- Source ranking AI simulation
- Officer task assignment
- Real-time pollution updates
- Inspection history
- Compliance beacon status

## Running the Project

### Prerequisites

- Node.js
- MongoDB

### Backend

```bash
cd backend
npm install
node server.js
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

## Project Structure

```
sentinel-mesh
├── backend
│   ├── server.js
│   ├── models
│   │   └── Hotspot.js
│   └── package.json
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── PollutionMap.jsx
│   │   │   ├── PollutionChart.jsx
│   │   │   └── SourceRanking.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── api.js
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```
