import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import "./i18n.js";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Suspense fallback="loading">
      <App />
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
