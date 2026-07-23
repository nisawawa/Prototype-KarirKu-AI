import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_JOBS, MOCK_INTERVIEW_QUESTIONS } from '../data/dummy';
import { Send, Bot, User, AlertTriangle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MockInterview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = MOCK_JOBS.find(j => j.id === id) || MOCK_JOBS[0];
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [answers, currentQuestionIndex, isAiTyping]);

  const handleNextQuestion = () => {
    if (!currentAnswer.trim()) return;

    // Save user answer
    setAnswers([...answers, { question: MOCK_INTERVIEW_QUESTIONS[currentQuestionIndex], answer: currentAnswer }]);
    setCurrentAnswer('');

    if (currentQuestionIndex < MOCK_INTERVIEW_QUESTIONS.length - 1) {
      setIsAiTyping(true);
      setTimeout(() => {
        setIsAiTyping(false);
        setCurrentQuestionIndex(prev => prev + 1);
      }, 1500); // Simulate AI thinking for next question
    } else {
      handleFinish();
    }
  };

  const handleFinish = () => {
    setIsAnalyzing(true);
    // Simulate API call for feedback generation
    setTimeout(() => {
      setIsAnalyzing(false);
      navigate(`/feedback/${job.id}`);
    }, 2500);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-120px)] flex flex-col bg-white rounded-3xl border border-primary-200 shadow-sm overflow-hidden animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="bg-primary-900 p-4 px-6 md:px-8 flex justify-between items-center text-white shrink-0">
        <div>
          <h2 className="font-bold text-lg">AI Interviewer</h2>
          <p className="text-primary-200 text-sm">{job.position} di {job.company}</p>
        </div>
        <div className="bg-primary-800 px-4 py-1.5 rounded-full text-sm font-medium border border-primary-700">
          Pertanyaan {currentQuestionIndex + 1} / {MOCK_INTERVIEW_QUESTIONS.length}
        </div>
      </div>

      {/* Notice */}
      <div className="bg-blue-50 px-6 py-3 border-b border-blue-100 flex items-center gap-3 shrink-0">
        <AlertTriangle className="w-5 h-5 text-blue-600 shrink-0" />
        <p className="text-sm text-blue-800">
          Jawablah sealami mungkin. AI akan menganalisis relevansi, struktur, dan kejelasan jawaban Anda.
        </p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 bg-primary-50/50">
        <AnimatePresence initial={false}>
          {answers.map((item, index) => (
            <React.Fragment key={index}>
              {/* AI Question History */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white border border-primary-200 p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%]">
                  <p className="text-primary-800 leading-relaxed">{item.question}</p>
                </div>
              </motion.div>

              {/* User Answer History */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-4 flex-row-reverse"
              >
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-primary-700" />
                </div>
                <div className="bg-primary-600 text-white p-4 rounded-2xl rounded-tr-none shadow-sm max-w-[85%]">
                  <p className="leading-relaxed whitespace-pre-wrap">{item.answer}</p>
                </div>
              </motion.div>
            </React.Fragment>
          ))}
          
          {/* Current AI Question */}
          {!isAiTyping && !isAnalyzing && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center shrink-0 shadow-sm border-2 border-white">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white border border-primary-200 p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%]">
                <p className="text-primary-900 font-medium leading-relaxed">
                  {MOCK_INTERVIEW_QUESTIONS[currentQuestionIndex]}
                </p>
              </div>
            </motion.div>
          )}

          {/* Typing Indicator */}
          {isAiTyping && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white border border-primary-200 p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1.5 items-center">
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </motion.div>
          )}

          {/* Analyzing Indicator */}
          {isAnalyzing && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-10 gap-4"
            >
              <Loader2 className="w-10 h-10 text-primary-600 animate-spin" />
              <p className="text-primary-700 font-medium animate-pulse">AI sedang menganalisis seluruh jawaban Anda...</p>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </AnimatePresence>
      </div>

      {/* Input Area */}
      {!isAnalyzing && (
        <div className="p-4 md:p-6 bg-white border-t border-primary-200 shrink-0">
          <div className="flex flex-col gap-3">
            <textarea
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              placeholder="Ketik jawaban Anda di sini..."
              className="w-full bg-primary-50 border border-primary-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:bg-white resize-none transition-all"
              rows={4}
              disabled={isAiTyping || isAnalyzing}
            />
            <div className="flex justify-between items-center">
              <span className="text-xs text-primary-400 font-medium">Tip: Gunakan metode STAR (Situation, Task, Action, Result)</span>
              <button 
                onClick={handleNextQuestion}
                disabled={!currentAnswer.trim() || isAiTyping || isAnalyzing}
                className="flex items-center gap-2 px-6 py-2.5 bg-primary-900 text-white rounded-xl hover:bg-primary-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
              >
                {currentQuestionIndex < MOCK_INTERVIEW_QUESTIONS.length - 1 ? 'Pertanyaan Selanjutnya' : 'Selesai & Lihat Hasil'}
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MockInterview;
