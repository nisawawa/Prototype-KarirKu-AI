import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import CustomLogo from '../components/CustomLogo';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-primary-50 font-sans selection:bg-primary-900 selection:text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <CustomLogo className="w-8 h-8 text-primary-900" />
          <span className="text-2xl font-bold text-primary-900 tracking-tight">KarirKu AI</span>
        </Link>
        <Link to="/" className="text-primary-600 hover:text-primary-900 font-medium">
          Kembali ke Beranda
        </Link>
      </nav>

      <div className="container mx-auto px-6 py-12 md:py-24 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-900 mb-4 tracking-tight">Investasi untuk Karier Anda</h1>
          <p className="text-lg text-primary-600">Pilih paket yang sesuai dengan kebutuhan persiapan karier Anda. Dirancang khusus untuk mahasiswa dengan harga terjangkau.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Freemium */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-3xl border border-primary-200 shadow-sm flex flex-col relative"
          >
            <h3 className="text-xl font-bold text-primary-900 mb-2">Freemium</h3>
            <p className="text-primary-500 mb-6 text-sm">Untuk mencoba kecerdasan KarirKu AI.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-primary-900">Gratis</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {['Rekomendasi lowongan dasar', '1x Simulasi Mock Interview', 'Akses ke artikel karier'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-400 shrink-0" />
                  <span className="text-primary-700 font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/register" className="w-full block text-center py-3.5 px-4 bg-primary-100 text-primary-900 font-bold rounded-xl hover:bg-primary-200 transition-colors">
              Daftar Gratis
            </Link>
          </motion.div>

          {/* Subscription (Popular) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-primary-900 p-8 rounded-3xl border border-primary-800 shadow-xl shadow-primary-900/20 flex flex-col relative overflow-hidden transform md:-translate-y-4"
          >
            <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">
              Paling Populer
            </div>
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">Pro Student</h3>
            <p className="text-primary-200 mb-6 text-sm relative z-10">Akses tanpa batas untuk persiapan maksimal.</p>
            <div className="mb-8 relative z-10">
              <span className="text-4xl font-extrabold text-white">Rp 49.000</span>
              <span className="text-primary-300">/bulan</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 relative z-10">
              {['Job Matching semantik tanpa batas', 'Mock Interview tanpa batas', 'Analisis CV terstruktur', 'Prioritas dukungan'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" />
                  <span className="text-primary-50 font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/register" className="w-full block text-center py-3.5 px-4 bg-white text-primary-900 font-bold rounded-xl hover:bg-primary-50 transition-colors relative z-10">
              Mulai Berlangganan
            </Link>
          </motion.div>

          {/* Pay-per-use */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-3xl border border-primary-200 shadow-sm flex flex-col"
          >
            <h3 className="text-xl font-bold text-primary-900 mb-2">Sesi Ekstra</h3>
            <p className="text-primary-500 mb-6 text-sm">Untuk kebutuhan mendesak wawancara spesifik.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-primary-900">Rp 15.000</span>
              <span className="text-primary-500">/sesi</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {['1x Simulasi Mock Interview Mendalam', 'Feedback komprehensif', 'Berlaku 30 hari'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-400 shrink-0" />
                  <span className="text-primary-700 font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/register" className="w-full block text-center py-3.5 px-4 bg-primary-100 text-primary-900 font-bold rounded-xl hover:bg-primary-200 transition-colors">
              Beli Sesi
            </Link>
          </motion.div>
        </div>

        {/* B2B Section */}
        <div className="mt-16 bg-white p-8 md:p-12 rounded-3xl border border-primary-200 shadow-sm text-center">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">Untuk Universitas & Career Center</h3>
          <p className="text-primary-600 max-w-2xl mx-auto mb-8">
            Berikan fasilitas terbaik untuk kesiapan karier seluruh mahasiswa Anda dengan harga lisensi khusus institusi.
          </p>
          <a href="mailto:contact@karirku.ai" className="inline-flex justify-center py-3.5 px-8 bg-primary-900 text-white font-bold rounded-xl hover:bg-primary-800 transition-colors">
            Hubungi Tim Kami
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
