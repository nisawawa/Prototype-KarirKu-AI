import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getMockUser, MOCK_JOBS } from '../data/dummy';
import { Search, ChevronRight, Award, Briefcase, Sparkles } from 'lucide-react';

const Dashboard = () => {
  const MOCK_USER = getMockUser();
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary-900">Halo, {MOCK_USER.name}! 👋</h1>
        <p className="text-primary-600 mt-2">Siap untuk menemukan pekerjaan impianmu hari ini?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-1 bg-white rounded-3xl p-6 border border-primary-100 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary-900">
              {MOCK_USER.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary-900">{MOCK_USER.name}</h3>
              <p className="text-sm text-primary-500">{MOCK_USER.major}, Semester {MOCK_USER.semester}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-2">Skills</p>
              <div className="flex flex-wrap gap-2">
                {MOCK_USER.skills.slice(0,3).map(skill => (
                  <span key={skill} className="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full border border-primary-100">
                    {skill}
                  </span>
                ))}
                {MOCK_USER.skills.length > 3 && (
                  <span className="px-3 py-1 bg-primary-50 text-primary-500 text-xs rounded-full border border-primary-100">
                    +{MOCK_USER.skills.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>

          <Link to="/profile" className="mt-6 w-full py-2.5 bg-primary-50 text-primary-700 rounded-xl font-medium text-sm flex items-center justify-center hover:bg-primary-100 transition-colors">
            Edit Profil Lengkap
          </Link>
        </motion.div>

        {/* Quick Actions */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-6 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
              <Sparkles className="w-24 h-24" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Job Matcher</h3>
                <p className="text-primary-100 text-sm mb-6">Temukan lowongan yang 99% cocok dengan profil & skill kamu.</p>
              </div>
              <Link to="/job-matcher" className="inline-flex items-center text-sm font-medium bg-white text-primary-900 px-5 py-2.5 rounded-full w-max hover:bg-primary-50 transition-colors">
                Cari Sekarang
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-white border border-primary-200 rounded-3xl p-6 relative overflow-hidden group shadow-sm">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 text-primary-900">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">Mock Interview</h3>
                <p className="text-primary-600 text-sm mb-6">Berlatih wawancara dengan AI untuk posisi impianmu dan dapatkan feedback instan.</p>
              </div>
              <div className="text-sm font-medium text-primary-400">
                Akses melalui detail lowongan
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Top Recommendations */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-primary-900">Rekomendasi Pekerjaan Teratas</h2>
          <Link to="/job-matcher" className="text-sm font-medium text-primary-600 hover:text-primary-900">Lihat Semua</Link>
        </div>
        
        <div className="space-y-4">
          {MOCK_JOBS.slice(0, 2).map((job) => (
            <motion.div 
              key={job.id}
              whileHover={{ x: 4 }}
              className="bg-white p-5 rounded-2xl border border-primary-100 flex flex-col sm:flex-row justify-between sm:items-center gap-4 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-900 text-lg">{job.position}</h4>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-primary-500 mt-1">
                    <span className="font-medium text-primary-700">{job.company}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span className="bg-primary-50 px-2 py-0.5 rounded text-xs">{job.type}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                <div className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                  <Sparkles className="w-4 h-4" />
                  {job.matchScore}% Match
                </div>
                <Link to={`/job/${job.id}`} className="px-4 py-2 bg-primary-900 text-white text-sm font-medium rounded-lg hover:bg-primary-800 transition-colors">
                  Detail
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
