// pages/Reporte.js
import React from 'react';
import '../style.css';

export default function Reporte() {
  return (
    <div>
      <header className="navbar">
        <div className="nav-left">
          <a href="/dashboard">Dashboard</a>
          <a href="/graficos">Gráficos</a>
          <a href="/ranking">Ranking</a>
        </div>
        <img src="/logo.png" alt="KIA logo" className="logo" />
      </header>

      <main className="content">
        <h1>Reporte</h1>
        <p>Ver reporte Individuales.</p>
      </main>
    </div>
  );
}
