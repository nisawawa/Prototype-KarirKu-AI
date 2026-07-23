import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_JOBS, MOCK_INTERVIEW_FEEDBACK } from '../data/dummy';
import { Trophy, MessageCircle, Code, Brain, ChevronRight, LayoutDashboard, ArrowUpRight, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const InterviewFeedback = () => {
  const { id } = useParams();
  const job = MOCK_JOBS.find(j => j.id === id) || MOCK_JOBS[0];
  const feedback = MOCK_INTERVIEW_FEEDBACK;

  const scoreColor = 
    feedback.overallScore >= 80 ? 'text-green-500' : 
    feedback.overallScore >= 60 ? 'text-yellow-500' : 'text-red-500';

  const scoreBg = 
    feedback.overallScore >= 80 ? 'bg-green-50 border-green-200' : 
    feedback.overallScore >= 60 ? 'bg-yellow-50 border-yellow-200' : 'bg-red-50 border-red-200';

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-primary-900">Hasil Evaluasi Interview</h1>
        <p className="text-primary-600 mt-2 text-lg">
          Posisi {job.position} di {job.company}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Overall Score */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`md:col-span-1 rounded-3xl p-8 flex flex-col items-center justify-center text-center border shadow-sm ${scoreBg}`}
        >
          <Trophy className={`w-12 h-12 mb-4 ${scoreColor}`} />
          <h3 className="text-sm font-bold text-primary-600 uppercase tracking-wider mb-2">Skor Keseluruhan</h3>
          <div className={`text-6xl font-extrabold ${scoreColor}`}>
            {feedback.overallScore}
            <span className="text-2xl text-primary-400">/100</span>
          </div>
          <p className="mt-4 font-medium text-primary-700">
            {feedback.overallScore >= 80 ? 'Sangat Baik! Anda siap.' : 'Terus Berlatih!'}
          </p>
        </motion.div>

        {/* Detailed Metrics */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <MetricCard 
            title="Komunikasi" 
            score={feedback.communication} 
            icon={<MessageCircle className="w-5 h-5 text-blue-500" />} 
            bg="bg-blue-50"
            border="border-blue-100"
          />
          <MetricCard 
            title="Teknikal & Skill" 
            score={feedback.technicalSkill} 
            icon={<Code className="w-5 h-5 text-purple-500" />} 
            bg="bg-purple-50"
            border="border-purple-100"
          />
          <MetricCard 
            title="Kepercayaan Diri" 
            score={feedback.confidence} 
            icon={<Brain className="w-5 h-5 text-orange-500" />} 
            bg="bg-orange-50"
            border="border-orange-100"
          />
          <MetricCard 
            title="Kesesuaian Peran" 
            score={job.matchScore} 
            icon={<Target className="w-5 h-5 text-green-500" />} 
            bg="bg-green-50"
            border="border-green-100"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-primary-200 shadow-sm">
          <h3 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm">
              +
            </span>
            Kekuatan Anda
          </h3>
          <ul className="space-y-4">
            {feedback.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-primary-700 leading-relaxed font-medium">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Weaknesses */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-primary-200 shadow-sm">
          <h3 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">
              -
            </span>
            Area Perbaikan
          </h3>
          <ul className="space-y-4">
            {feedback.weaknesses.map((w, i) => (
              <li key={i} className="flex items-start gap-3">
                <MinusIcon className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-primary-700 leading-relaxed font-medium">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* AI Suggestion */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 text-white shadow-xl shadow-primary-900/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Brain className="w-32 h-32" />
        </div>
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-300" />
            Saran Utama AI
          </h3>
          <p className="text-primary-100 text-lg leading-relaxed max-w-3xl">
            {feedback.aiSuggestion}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Link to={`/interview/${job.id}`} className="flex-1 flex justify-center items-center gap-2 px-6 py-4 bg-white border border-primary-200 text-primary-900 font-bold rounded-xl hover:bg-primary-50 transition-colors shadow-sm">
          Latihan Ulang
        </Link>
        <button className="flex-1 flex justify-center items-center gap-2 px-6 py-4 bg-primary-900 text-white font-bold rounded-xl hover:bg-primary-800 transition-colors shadow-sm">
          Lamar Sekarang
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
      <div className="text-center pb-8">
         <Link to="/dashboard" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-900 font-medium">
          <LayoutDashboard className="w-4 h-4" />
          Kembali ke Dashboard
        </Link>
      </div>
    </div>
  );
};

const MetricCard = ({ title, score, icon, bg, border }) => (
  <div className={`p-6 rounded-2xl border ${border} ${bg} flex flex-col justify-between`}>
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <span className="font-bold text-primary-800">{title}</span>
    </div>
    <div className="flex items-end gap-2">
      <span className="text-3xl font-extrabold text-primary-900">{score}</span>
      <span className="text-sm font-medium text-primary-500 mb-1">/100</span>
    </div>
  </div>
);

const CheckIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const MinusIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
  </svg>
);

export default InterviewFeedback;
