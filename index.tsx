import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';

console.log("[v0] PersoFlex GmbH Portal - App starting...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
