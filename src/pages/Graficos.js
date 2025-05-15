// pages/Graficos.js
import React from 'react';
import '../style.css';

export default function Graficos() {
  return (
    <div>
      <header className="navbar">
        <div className="nav-left">
          <a href="/dashboard">Dashboard</a>
          <a href="/reporte">Reportes</a>
          <a href="/ranking">Ranking</a>
        </div>
        <img src="/logo.png" alt="KIA logo" className="logo" />
      </header>

      <main className="content">
        <h1>Gráficos</h1>
        <p>Ver grafos.</p>
      </main>
    </div>
  );
}