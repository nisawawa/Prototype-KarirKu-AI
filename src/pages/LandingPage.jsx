import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, MessageSquare, Zap, ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import CustomLogo from '../components/CustomLogo';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-primary-50 font-sans selection:bg-primary-900 selection:text-white overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <CustomLogo className="w-8 h-8 text-primary-900" />
          <span className="text-2xl font-bold text-primary-900 tracking-tight">KarirKu AI</span>
        </div>
        <div className="hidden md:flex gap-8 items-center font-medium text-primary-600">
          <a href="#fitur" className="hover:text-primary-900 transition-colors">Fitur</a>
          <a href="#cara-kerja" className="hover:text-primary-900 transition-colors">Cara Kerja</a>
          <Link to="/pricing" className="hover:text-primary-900 transition-colors">Harga</Link>
        </div>
        <div className="flex gap-4">
          <Link to="/login" className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-primary-700 bg-white border border-primary-200 rounded-full hover:bg-primary-50 hover:border-primary-300 transition-all shadow-sm">
            Masuk
          </Link>
          <Link to="/register" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-primary-900 rounded-full hover:bg-primary-800 transition-all shadow-md shadow-primary-900/20">
            Daftar Gratis
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-100px)] flex flex-col justify-center pb-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[800px] opacity-40 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary-800 text-sm font-medium mb-8 border border-primary-200 shadow-sm">
              <SparklesIcon className="w-4 h-4 text-blue-500" />
              Asisten Pencari Kerja Personal untuk Mahasiswa
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-primary-900 tracking-tight leading-[1.1] mb-6">
              Temukan Pekerjaan <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-800 via-primary-600 to-blue-500">
                Paling Relevan
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-primary-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Gunakan kecerdasan buatan untuk mencocokkan profilmu dengan lowongan yang tepat, dan berlatih wawancara secara instan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/register" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary-900 rounded-full hover:bg-primary-800 transition-all shadow-xl shadow-primary-900/20 group w-full sm:w-auto">
                Mulai Sekarang
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#fitur" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-900 bg-white border border-primary-200 rounded-full hover:bg-primary-50 transition-all shadow-sm w-full sm:w-auto">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Fitur Unggulan</h2>
            <p className="text-primary-600">Teknologi AI mutakhir untuk membantu Anda selangkah lebih maju dari kandidat lainnya.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Job Matcher */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary-50 rounded-3xl p-8 lg:p-12 border border-primary-100"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-primary-100">
                <Target className="w-7 h-7 text-primary-900" />
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">AI Job Matcher</h3>
              <p className="text-primary-600 mb-6 leading-relaxed">
                Pencocokan lowongan yang bersifat semantik. Sistem memahami konteks skill dan pengalaman Anda, bukan hanya sekadar mencocokkan kata kunci.
              </p>
              <ul className="space-y-3">
                {['Analisis Profil Mendalam', 'Rekomendasi Akurat', 'Hemat Waktu Pencarian'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Mock Interview */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 rounded-full filter blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
              
              <div className="w-14 h-14 bg-primary-800 rounded-2xl flex items-center justify-center mb-6 relative z-10 border border-primary-700">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">AI Mock Interview</h3>
              <p className="text-primary-200 mb-6 leading-relaxed relative z-10">
                Simulasi wawancara personal dengan feedback instan. Berlatih menjawab pertanyaan yang dirancang khusus untuk posisi yang Anda lamar.
              </p>
              <ul className="space-y-3 relative z-10">
                {['Pertanyaan Relevan', 'Feedback Instan', 'Evaluasi Kekuatan & Kelemahan'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary-100 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="cara-kerja" className="py-24 bg-primary-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Cara Kerja</h2>
            <p className="text-primary-600">3 langkah mudah menuju karier impian Anda.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-primary-200 -z-10"></div>
            
            {[
              { step: '1', title: 'Lengkapi Profil', desc: 'Isi riwayat akademik, organisasi, proyek, skill, dan minat karier Anda.' },
              { step: '2', title: 'Temukan Kecocokan', desc: 'AI kami akan mencocokkan profil Anda dengan lowongan yang paling relevan.' },
              { step: '3', title: 'Berlatih Wawancara', desc: 'Lakukan simulasi wawancara untuk lowongan yang dipilih dan dapatkan feedback.' }
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 mx-auto bg-white border-4 border-primary-50 rounded-full flex items-center justify-center text-2xl font-bold text-primary-900 mb-6 shadow-sm">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-primary-900 mb-2">{item.title}</h4>
                <p className="text-primary-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-primary-200 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <CustomLogo className="w-6 h-6 text-primary-900" />
            <span className="text-xl font-bold text-primary-900">KarirKu AI</span>
          </div>
          <p className="text-primary-500 text-sm">
            © {new Date().getFullYear()} KarirKu AI MVP Prototype. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

function SparklesIcon(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

export default LandingPage;
