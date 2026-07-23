import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MOCK_JOBS } from '../data/dummy';
import { Search, Sparkles, Briefcase, MapPin, Loader2, ArrowRight } from 'lucide-react';

const JobMatcher = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setShowResults(false);
    
    // Simulate AI Semantic Matching delay
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
    }, 2500);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-900 rounded-2xl mb-4">
          <Sparkles className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-primary-900">AI Job Matcher</h1>
        <p className="text-primary-600 mt-3 text-lg">
          Sistem AI kami akan mencocokkan profil dan kemampuanmu dengan lowongan yang paling relevan secara semantik.
        </p>
      </div>

      {!showResults && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 md:p-10 border border-primary-200 shadow-xl shadow-primary-900/5 max-w-3xl mx-auto"
        >
          <form onSubmit={handleSearch} className="space-y-6">
            <p className="text-sm font-medium text-primary-500 mb-6 text-center">
              Data diambil dari profil Anda. Sesuaikan jika diperlukan sebelum mencari.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-primary-700 mb-2">Bidang yang Diminati</label>
                <input type="text" defaultValue="Frontend Developer, UI/UX Designer" className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:ring-2 focus:ring-primary-900 outline-none" />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-primary-700 mb-2">Keahlian (Skills)</label>
                <textarea rows="2" defaultValue="React, JavaScript, Tailwind CSS, Figma, UI/UX Design" className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:ring-2 focus:ring-primary-900 outline-none resize-none" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">Tingkat Pendidikan</label>
                <select className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:ring-2 focus:ring-primary-900 outline-none bg-white">
                  <option>Mahasiswa Tingkat Akhir</option>
                  <option>Fresh Graduate</option>
                  <option>Profesional</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">Lokasi Harapan</label>
                <input type="text" defaultValue="Remote atau Yogyakarta" className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:ring-2 focus:ring-primary-900 outline-none" />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSearching}
              className="w-full mt-4 py-4 bg-primary-900 text-white font-bold rounded-xl hover:bg-primary-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-900/20"
            >
              {isSearching ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  AI Sedang Mencocokkan Profilmu...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Cari Lowongan Terbaik
                </>
              )}
            </button>
          </form>
        </motion.div>
      )}

      {/* Results Section */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-end mb-6 border-b border-primary-200 pb-4">
              <div>
                <h2 className="text-2xl font-bold text-primary-900">Hasil Rekomendasi</h2>
                <p className="text-primary-600">Ditemukan {MOCK_JOBS.length} lowongan yang sangat cocok dengan profilmu.</p>
              </div>
              <button 
                onClick={() => setShowResults(false)}
                className="text-sm font-medium text-primary-600 hover:text-primary-900 underline"
              >
                Ubah Pencarian
              </button>
            </div>

            <div className="grid gap-4">
              {MOCK_JOBS.map((job, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={job.id} 
                  className="bg-white p-6 rounded-2xl border border-primary-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex gap-5">
                    <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center border border-primary-100 flex-shrink-0">
                      <Briefcase className="w-7 h-7 text-primary-700" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-primary-900">{job.position}</h3>
                        <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-bold border border-green-200">
                          <Sparkles className="w-3 h-3" />
                          {job.matchScore}% Match
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-primary-500 mb-3">
                        <span className="font-semibold text-primary-700">{job.company}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                        <span className="bg-primary-50 px-2 py-0.5 rounded border border-primary-100">{job.type}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.requiredSkills.map(skill => (
                          <span key={skill} className="px-2.5 py-1 bg-primary-50 text-primary-600 text-xs rounded-md font-medium border border-primary-100">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-32 flex-shrink-0">
                    <Link 
                      to={`/job/${job.id}`} 
                      className="w-full flex items-center justify-center gap-1 px-4 py-3 bg-primary-900 text-white text-sm font-medium rounded-xl hover:bg-primary-800 transition-colors"
                    >
                      Lihat Detail
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JobMatcher;
