export const getMockUser = () => ({
  name: localStorage.getItem('karirku_name') || "Heni",
  email: localStorage.getItem('karirku_email') || "heni@student.uii.ac.id",
  university: "Universitas Islam Indonesia",
  major: "Informatika",
  semester: 7,
  skills: ["React", "JavaScript", "Python", "UI/UX Design"],
  organizations: ["BEM FTI UII", "HMTF"],
  projects: ["Sistem Rekomendasi Magang", "Website Portofolio"],
  careerInterests: ["Frontend Developer", "UI/UX Designer", "Software Engineer"],
  about: "Mahasiswa tingkat akhir yang antusias dengan pengembangan web dan desain antarmuka pengguna."
});

export const MOCK_JOBS = [
  {
    id: "job-1",
    company: "TechNesia",
    position: "Frontend Developer Intern",
    location: "Jakarta (Remote)",
    description: "Kami mencari Frontend Developer Intern yang bersemangat untuk bergabung dengan tim kami. Anda akan bekerja langsung dengan tim produk untuk membangun antarmuka pengguna yang responsif dan interaktif.",
    requiredSkills: ["React", "JavaScript", "Tailwind CSS"],
    matchScore: 95,
    type: "Internship"
  },
  {
    id: "job-2",
    company: "Kreatif Studio",
    position: "UI/UX Designer Intern",
    location: "Yogyakarta",
    description: "Kreatif Studio sedang mencari UI/UX Designer Intern untuk membantu mendesain pengalaman pengguna yang luar biasa untuk aplikasi klien kami.",
    requiredSkills: ["Figma", "UI/UX Design", "Prototyping"],
    matchScore: 88,
    type: "Internship"
  },
  {
    id: "job-3",
    company: "DataTech Solution",
    position: "Software Engineer Fresh Graduate",
    location: "Bandung",
    description: "Peluang bagi fresh graduate untuk bergabung sebagai Software Engineer. Anda akan dilatih dan diikutsertakan dalam pengembangan sistem enterprise kami.",
    requiredSkills: ["Python", "JavaScript", "SQL"],
    matchScore: 82,
    type: "Full-time"
  }
];

export const MOCK_INTERVIEW_QUESTIONS = [
  "Ceritakan tentang diri Anda dan ketertarikan Anda pada posisi ini.",
  "Bagaimana pengalaman Anda di organisasi kampus membantu mempersiapkan Anda untuk dunia kerja?",
  "Bisa jelaskan proyek 'Sistem Rekomendasi Magang' yang pernah Anda kerjakan? Apa peran Anda di sana?",
  "Bagaimana cara Anda menghadapi situasi di mana Anda harus mempelajari teknologi baru dalam waktu singkat?",
  "Apa kelebihan dan kelemahan terbesar Anda dalam konteks pekerjaan teknis?"
];

export const MOCK_INTERVIEW_FEEDBACK = {
  overallScore: 85,
  communication: 90,
  technicalSkill: 80,
  confidence: 85,
  strengths: ["Artikulasi sangat jelas", "Pengalaman proyek relevan", "Menunjukkan antusiasme tinggi"],
  weaknesses: ["Kurang mendetail saat menjelaskan teknis React", "Jawaban untuk kelemahan diri terlalu klise"],
  aiSuggestion: "Anda sudah memiliki dasar komunikasi yang sangat baik. Untuk interview selanjutnya, cobalah menggunakan metode STAR (Situation, Task, Action, Result) saat menjelaskan proyek teknis agar lebih terstruktur dan berdampak."
};
