// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePg from './Pages/HomPage/HomePg';
import Login from './Pages/Login/Login';
import Register from './Pages/Registrar/Registrar';
import Admin from './Pages/Admin/Admin';
import Cliente from './Pages/Cliente/Cliente';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Pg404 from './Pages/Pg404/Pg404';

function AppRoutes() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePg />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registrar' element={<Register />} />
          <Route
            path='/admin'
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route
            path='/cliente'
            element={
              <PrivateRoute>
                <Cliente />
              </PrivateRoute>
            }
          />
          <Route path='/*' element={<Pg404 />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default AppRoutes;
