import { useState } from 'react';
import { signup } from '../api/auth';

export default function Signup(){
  const [form, setForm] = useState({ name:'', email:'', password:'' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signup(form);
      alert('Signup successful! Check Atlas for the user document.');
    } catch (err) {
      alert(err?.response?.data?.message || err.message);
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input className="w-full border p-2 mb-2" placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})} />
        <input className="w-full border p-2 mb-2" placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})} />
        <input className="w-full border p-2 mb-4" placeholder="Password" type="password" onChange={(e)=>setForm({...form,password:e.target.value})} />
        <button className="w-full py-2 bg-blue-600 text-white rounded">{loading? 'Signing...' : 'Sign Up'}</button>
      </form>
    </div>
  );
}
