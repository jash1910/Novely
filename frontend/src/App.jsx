import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';

export default function App(){
  return (
    <BrowserRouter>
      <nav className="p-4 bg-slate-800 text-white flex gap-4">
        <Link to="/">Signup</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}
