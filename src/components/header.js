import React from 'react';
import './header.css';

export default function Header(props) {
  return <div>
    <nav>
      <ul className="menu">
        <li className="left">
          <img className="logo" src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" />
        </li>
        <li>
          <a href="">Plan</a>
        </li>
        <li>
          <a href="">Semanas</a>
        </li>
        <li>
          <a href="">Alimentación</a>
        </li>
        <li>
          <a href="">Consejos</a>
        </li>
      </ul>
    </nav>
  </div>
}