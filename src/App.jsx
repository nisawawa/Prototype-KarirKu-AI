import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Pages
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import JobMatcher from './pages/JobMatcher';
import JobDetail from './pages/JobDetail';
import MockInterview from './pages/MockInterview';
import InterviewFeedback from './pages/InterviewFeedback';
import Pricing from './pages/Pricing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<Pricing />} />

        {/* Protected Routes (using MainLayout) */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/job-matcher" element={<JobMatcher />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/interview/:id" element={<MockInterview />} />
          <Route path="/feedback/:id" element={<InterviewFeedback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
