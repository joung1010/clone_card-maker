import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import AuthService from "./service/authService";
import initializeApp from "./service/fiorebase"

const root = ReactDOM.createRoot(document.getElementById('root'));
const authService = new AuthService(initializeApp);
root.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>
);
