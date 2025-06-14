import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/main.css'; // if main.css is inside src/css/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);