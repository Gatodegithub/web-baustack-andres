import React from "react";
import logo from '../logoBaustack.png';
// import { useTranslation } from 'react-i18next';

export default function NavBar({handleClick, t, i18n}) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container py-3">
          <a className="navbar-brand" href="true"><img src={logo} alt="logo"></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item my-2">
                <a className="nav-link active" aria-current="page" href="true">{t('Nav.1')}</a>
              </li>
              <li className="nav-item my-2">
                <a className="nav-link" href="true">{t('Nav.2')}</a>
              </li>
              <li className="nav-item my-2">
                <a className="nav-link btn-primary text-white rounded-pill py-1 mt-md-1" href="true">{t('action')}</a>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
      
  );
}