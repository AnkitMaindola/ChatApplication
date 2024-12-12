import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import {Toaster} from 'react-hot-toast'
import './index.css';  // Ensure the path is correct



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toaster/> 
    <App />
  </React.StrictMode>
);

