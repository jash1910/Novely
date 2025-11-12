import { useState } from 'react';
import { login } from '../api/auth';

export default function Login(){
  const [form, setForm] = useState({ email:'', password:'' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await login(form);
      localStorage.setItem('token', res.data.token);
      alert('Login successful! Token saved to localStorage.');
    } catch (err) {
      alert(err?.response?.data?.message || err.message);
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input className="w-full border p-2 mb-2" placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})} />
        <input className="w-full border p-2 mb-4" placeholder="Password" type="password" onChange={(e)=>setForm({...form,password:e.target.value})} />
        <button className="w-full py-2 bg-green-600 text-white rounded">{loading? 'Logging...' : 'Login'}</button>
      </form>
    </div>
  );
}
