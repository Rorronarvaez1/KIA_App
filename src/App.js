// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Reporte from './pages/Reporte';
import Graficos from './pages/Graficos';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reporte" element={<Reporte />} />
        <Route path="/graficos" element={<Graficos />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </Router>
  );
}