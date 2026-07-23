import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CustomLogo from '../components/CustomLogo';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
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
        
        <h2 className="text-2xl font-bold text-primary-900 text-center mb-2">Selamat Datang Kembali</h2>
        <p className="text-primary-500 text-center mb-8">Masuk untuk melanjutkan perjalanan karier Anda.</p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-primary-700 mb-1">Email</label>
            <input 
              type="email" 
              defaultValue="heni@student.uii.ac.id"
              required
              className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary-700 mb-1">Password</label>
            <input 
              type="password" 
              defaultValue="password123"
              required
              className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-primary-600">
              <input type="checkbox" className="rounded border-primary-300 text-primary-900 focus:ring-primary-900" />
              Ingat saya
            </label>
            <a href="#" className="text-sm font-medium text-primary-900 hover:underline">Lupa password?</a>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full py-3.5 px-4 bg-primary-900 text-white font-medium rounded-xl hover:bg-primary-800 transition-all shadow-md flex justify-center items-center"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Masuk"
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-primary-600">
          Belum punya akun? <Link to="/register" className="font-medium text-primary-900 hover:underline">Daftar sekarang</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
