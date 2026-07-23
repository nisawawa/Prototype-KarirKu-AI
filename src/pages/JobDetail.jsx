import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_JOBS } from '../data/dummy';
import { ArrowLeft, MapPin, Building2, Calendar, MessageSquare, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = MOCK_JOBS.find(j => j.id === id) || MOCK_JOBS[0];

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-primary-600 hover:text-primary-900 font-medium transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Kembali
      </button>

      <div className="bg-white rounded-3xl overflow-hidden border border-primary-200 shadow-sm">
        {/* Header */}
        <div className="p-8 md:p-10 border-b border-primary-100 relative">
          <div className="absolute top-0 right-0 p-6">
            <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold border border-green-200 shadow-sm">
              <Sparkles className="w-4 h-4" />
              {job.matchScore}% Match
            </span>
          </div>

          <div className="w-20 h-20 bg-primary-50 border border-primary-100 rounded-2xl flex items-center justify-center mb-6">
            <Building2 className="w-10 h-10 text-primary-800" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-900 mb-4">{job.position}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-primary-600 font-medium">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span className="text-lg text-primary-800">{job.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{job.type}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-primary-900 mb-4">Deskripsi Pekerjaan</h2>
              <p className="text-primary-700 leading-relaxed text-lg">
                {job.description}
              </p>
              <p className="text-primary-700 leading-relaxed text-lg mt-4">
                Sebagai bagian dari tim kami, Anda akan memiliki kesempatan untuk belajar dari para profesional berpengalaman dan berkontribusi pada proyek-proyek yang berdampak nyata. Kami mencari individu yang proaktif, mau belajar, dan memiliki semangat kolaborasi tinggi.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary-900 mb-4">Skill yang Dibutuhkan</h2>
              <div className="flex flex-wrap gap-3">
                {job.requiredSkills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-primary-50 border border-primary-200 text-primary-800 rounded-xl font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-primary-900 rounded-3xl p-6 text-white shadow-xl shadow-primary-900/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-800 rounded-full mix-blend-screen filter blur-2xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Persiapan Wawancara</h3>
                <p className="text-primary-200 text-sm mb-6 leading-relaxed">
                  Tingkatkan peluang diterima dengan simulasi wawancara AI yang disesuaikan khusus untuk posisi ini.
                </p>
                
                <Link 
                  to={`/interview/${job.id}`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-white text-primary-900 font-bold rounded-xl hover:bg-primary-50 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-5 h-5" />
                  Mulai Mock Interview
                </Link>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-orange-800 leading-relaxed font-medium">
                Selesaikan simulasi wawancara sebelum melamar untuk mendapatkan skor rekomendasi yang lebih tinggi bagi rekruter.
              </p>
            </div>
            
            <button className="w-full py-4 border-2 border-primary-200 text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-colors">
              Lamar Pekerjaan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
