import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './AuthContext';
import Login from './containers/Login';
import Signup from './containers/Signup';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
<Routes>
  <Route path='/' element={<App />} />
  <Route path='Login' element={<Login />} />
  <Route path='Signup' element={<Signup />} />
</Routes>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
