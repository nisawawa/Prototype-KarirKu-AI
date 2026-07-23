import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomLogo from '../components/CustomLogo';

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Save to localStorage for demo purposes
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    if (name) localStorage.setItem('karirku_name', name);
    if (email) localStorage.setItem('karirku_email', email);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-50 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-xl shadow-primary-900/5 border border-primary-100">
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center gap-3">
            <CustomLogo className="w-10 h-10 text-primary-900" />
            <span className="text-3xl font-bold text-primary-900 tracking-tight">KarirKu AI</span>
          </Link>
        </div>
        
        <h2 className="text-2xl font-bold text-primary-900 text-center mb-2">Buat Akun Baru</h2>
        <p className="text-primary-500 text-center mb-8">Mulai perjalanan karier Anda bersama KarirKu AI.</p>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-primary-700 mb-1">Nama Lengkap</label>
            <input 
              type="text" 
              name="name"
              required
              placeholder="Contoh: Heni Kirana"
              className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary-700 mb-1">Email</label>
            <input 
              type="email" 
              name="email"
              required
              placeholder="email@student.ac.id"
              className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary-700 mb-1">Password</label>
            <input 
              type="password" 
              required
              placeholder="Minimal 8 karakter"
              className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all"
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full py-3.5 px-4 bg-primary-900 text-white font-medium rounded-xl hover:bg-primary-800 transition-all shadow-md flex justify-center items-center mt-4"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Daftar Sekarang"
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-primary-600">
          Sudah punya akun? <Link to="/login" className="font-medium text-primary-900 hover:underline">Masuk</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
