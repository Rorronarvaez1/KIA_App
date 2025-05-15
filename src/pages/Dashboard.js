// pages/Dashboard.js
import React from 'react';
import '../style.css';

export default function Dashboard() {
  return (
    <div>
      <header className="navbar">
        <div className="nav-left">
          <a href="/reporte">Reporte</a>
          <a href="/graficos">Gráficos</a>
          <a href="/ranking">Ranking</a>
        </div>
        <img src="/logo.png" alt="KIA logo" className="logo" />
      </header>

      <main className="content">
        <h1>Bienvenido al Panel de Control</h1>
        <p>Selecciona una opción en la barra de navegación para continuar.</p>
      </main>
    </div>
  );
}