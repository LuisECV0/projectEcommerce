// components/Header/Header.js
import React from 'react';
import './Header.css'; // Importa los estilos CSS

const Header = () => {
  return (
    <header>
      <div className="logo">Mi Logo</div>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
