import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getMockUser } from '../data/dummy';
import { Save, Upload, User, BookOpen, Briefcase, Code, Star } from 'lucide-react';

const Profile = () => {
  const [isSaving, setIsSaving] = useState(false);
  const MOCK_USER = getMockUser();

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('Profil berhasil diperbarui!');
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-primary-900">Profil Pengguna</h1>
        <p className="text-primary-600 mt-2">Lengkapi profil Anda untuk mendapatkan rekomendasi pekerjaan yang lebih akurat.</p>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 border border-primary-100 shadow-sm">
        {/* Upload CV Section */}
        <div className="mb-10 pb-10 border-b border-primary-100">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-primary-900 mb-1">Unggah CV (Opsional)</h3>
              <p className="text-sm text-primary-500">AI kami akan mengekstrak informasi dari CV Anda secara otomatis.</p>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-primary-50 text-primary-900 font-medium rounded-xl border border-primary-200 hover:bg-primary-100 transition-colors">
              <Upload className="w-4 h-4" />
              Unggah PDF
            </button>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-8">
          {/* Basic Info */}
          <section className="space-y-5">
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-primary-500" />
              <h3 className="text-lg font-bold text-primary-900">Informasi Dasar</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-1">Nama Lengkap</label>
                <input type="text" defaultValue={MOCK_USER.name} className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:ring-2 focus:ring-primary-900 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-1">Email</label>
                <input type="email" defaultValue={MOCK_USER.email} className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:ring-2 focus:ring-primary-900 outline-none bg-primary-50" readOnly />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-primary-700 mb-1">Tentang Saya</label>
                <textarea rows="3" defaultValue={MOCK_USER.about} className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:ring-2 focus:ring-primary-900 outline-none resize-none"></textarea>
              </div>
            </div>
          </section>

          {/* Academic Info */}
          <section className="space-y-5">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-primary-500" />
              <h3 className="text-lg font-bold text-primary-900">Riwayat Akademik</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-1">Universitas</label>
                <input type="text" defaultValue={MOCK_USER.university} className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:ring-2 focus:ring-primary-900 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-1">Program Studi</label>
                <input type="text" defaultValue={MOCK_USER.major} className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:ring-2 focus:ring-primary-900 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-1">Semester Saat Ini</label>
                <input type="number" defaultValue={MOCK_USER.semester} className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:ring-2 focus:ring-primary-900 outline-none" />
              </div>
            </div>
          </section>

          {/* Skills & Interests */}
          <section className="space-y-5">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-primary-500" />
              <h3 className="text-lg font-bold text-primary-900">Skill & Minat</h3>
            </div>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-1">Keahlian (Pisahkan dengan koma)</label>
                <input type="text" defaultValue={MOCK_USER.skills.join(', ')} className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:ring-2 focus:ring-primary-900 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-1">Minat Karier</label>
                <input type="text" defaultValue={MOCK_USER.careerInterests.join(', ')} className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:ring-2 focus:ring-primary-900 outline-none" />
              </div>
            </div>
          </section>

          <div className="pt-6 border-t border-primary-100 flex justify-end">
            <button 
              type="submit" 
              disabled={isSaving}
              className="px-8 py-3 bg-primary-900 text-white font-medium rounded-xl hover:bg-primary-800 transition-all flex items-center gap-2"
            >
              {isSaving ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Save className="w-5 h-5" />
              )}
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
