import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePg from './Pages/HomPage/HomePg';
import Login from './Pages/Login/Login';
import Pg404 from './Pages/Pg404/Pg404';
import Register from './Pages/Registrar/Registrar';
import Admin from './Pages/Admin/Admin';
import Cliente from './Pages/Cliente/Cliente'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePg />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registrar' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/cliente' element={<Cliente />} /> 
        <Route path='/*' element={<Pg404 />} />
      </Routes>
    </BrowserRouter>
  );
}
