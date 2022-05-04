import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18n from './i18n';
import Popper from 'popper.js';
import 'bootstrap';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'flag-icons/css/flag-icons.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);