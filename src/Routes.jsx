import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePg from './Pages/HomPage/HomePg';
import Login from './Pages/Login/Login';
import Pg404 from './Pages/Pg404/Pg404';
import Register from './Pages/Registrar/Registrar';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePg />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Registrar' element={<Register />} />
        <Route path='/*' element={<Pg404 />} />
      </Routes>
    </BrowserRouter>
  );
}
