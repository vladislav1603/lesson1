import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TestClass from './TextCheck'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <TestClass/>
  </React.StrictMode>
);

