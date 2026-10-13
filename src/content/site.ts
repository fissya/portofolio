// All identity, contact details, and social links below are PLACEHOLDER data.
const name = "Nama Kamu";
const headline = "Mahasiswa Sistem Informasi";
const bio =
  "Saya adalah mahasiswa Sistem Informasi yang tertarik menghubungkan kebutuhan bisnis dengan teknologi. Saya mempelajari analisis sistem, pengolahan data, dan pengembangan web untuk merancang solusi yang bermanfaat. Saya ingin mengembangkan kemampuan tersebut melalui pengalaman magang dan kolaborasi proyek.";

export const site = {
  placeholder: true,
  placeholderLabel: "PLACEHOLDER / Ganti dengan informasi kamu",
  language: "id",
  name,
  headline,
  bio,
  email: "nama.kamu@example.com",
  githubUrl: "https://github.com/nama-kamu",
  linkedinUrl: "https://www.linkedin.com/in/nama-kamu",
  skills: ["SQL", "Analisis Sistem", "Next.js", "UI/UX", "Excel/BI"],
  education: [
    {
      id: "sarjana-sistem-informasi",
      period: "20XX - Sekarang",
      degree: "S1 Sistem Informasi",
      institution: "Nama Universitas",
      description: "Placeholder untuk pendidikan saat ini. Ganti dengan kampus dan periode studi kamu.",
      placeholder: true,
    },
    {
      id: "sekolah-menengah",
      period: "20XX - 20XX",
      degree: "SMA / Sederajat",
      institution: "Nama Sekolah",
      description: "Placeholder untuk pendidikan sebelumnya. Ganti dengan sekolah dan tahun kelulusan kamu.",
      placeholder: true,
    },
  ],
  aboutUi: {
    sectionId: "tentang",
    skillsTitle: "Keahlian",
    educationTitle: "Pendidikan",
  },
  contactUi: {
    sectionId: "kontak",
    emailLabel: "Email",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    cvNotice: "PDF ini masih berupa CV placeholder. Ganti dengan CV kamu sebelum melamar magang atau kerja.",
  },
  marquee: {
    label: "Daftar keahlian",
    pauseLabel: "Jeda animasi keahlian",
    resumeLabel: "Lanjutkan animasi keahlian",
  },
  homeHref: "/",
  topId: "atas",
  metadata: {
    title: `${name} — Portofolio Sistem Informasi`,
    description:
      "Portofolio placeholder mahasiswa Sistem Informasi: analisis sistem, data, dan pengembangan web.",
  },
  navigationLabel: "Navigasi utama",
  navigation: [
    { label: "Proyek", href: "/#proyek", sectionId: "proyek" },
    { label: "Tentang", href: "/#tentang", sectionId: "tentang" },
    { label: "Kontak", href: "/#kontak", sectionId: "kontak" },
  ],
  cv: {
    label: "Unduh CV",
    href: "/cv.pdf",
    document: {
      title: "Curriculum Vitae",
      badge: "PLACEHOLDER",
      notice: "Dokumen ini adalah contoh CV. Semua informasi identitas, pendidikan, dan kontak harus diganti sebelum digunakan untuk melamar.",
      bioTitle: "Profil singkat",
      skillsTitle: "Keahlian",
      educationTitle: "Pendidikan",
      contactTitle: "Kontak",
      footer: "CV placeholder - belum mewakili riwayat atau kualifikasi nyata.",
    },
  },
  accessibility: {
    mainId: "konten-utama",
    skipLink: { label: "Lewati ke konten utama", href: "#konten-utama" },
    homeLabel: `${name} — beranda`,
  },
  theme: {
    activateLight: "Aktifkan tema terang",
    activateDark: "Aktifkan tema gelap",
  },
  intro: {
    eyebrow: "Portofolio / 2026",
    description:
      "Menghubungkan kebutuhan bisnis dengan solusi teknologi melalui analisis sistem, data, dan pengembangan web.",
    primaryAction: { label: "Lihat Proyek", href: "#proyek" },
    secondaryAction: { label: "Hubungi Saya", href: "#kontak" },
  },
  sections: [
    {
      id: "proyek",
      number: "01",
      title: "Proyek",
      status: "PLACEHOLDER / Contoh studi kasus",
      description:
        "Data contoh proyek mencakup dashboard analisis penjualan, sistem informasi inventaris, dan redesign UI aplikasi kampus. Seluruh studi kasus masih berupa placeholder dan belum mewakili karya nyata.",
    },
    {
      id: "tentang",
      number: "02",
      title: "Tentang",
      status: "PLACEHOLDER / Profil contoh",
      description: bio,
    },
    {
      id: "kontak",
      number: "03",
      title: "Kontak",
      status: "PLACEHOLDER / Kontak contoh",
      description:
        "Email serta tautan GitHub dan LinkedIn masih berupa contoh. Ganti dengan informasi kontak kamu sebelum membagikan portofolio.",
    },
  ],
  projectUi: {
    sectionId: "proyek",
    basePath: "/projects",
    placeholderBadge: "Placeholder",
    detailLinkLabel: "Lihat studi kasus",
    detailEyebrow: "Studi kasus / Sistem Informasi",
    placeholderNotice:
      "Studi kasus ini merupakan placeholder. Isi, hasil yang diharapkan, serta tautan demo dan repositori adalah contoh dan belum mewakili karya nyata.",
    labels: {
      summary: "Ringkasan",
      role: "Peran",
      year: "Tahun",
      problem: "Masalah",
      solution: "Solusi",
      result: "Hasil",
      techStack: "Tech stack",
      demo: "Lihat Demo",
      repo: "Lihat Repositori",
    },
    backToProjects: { label: "Kembali ke proyek", href: "/#proyek" },
    navigation: {
      label: "Navigasi proyek",
      previous: "Proyek sebelumnya",
      next: "Proyek sesudahnya",
    },
    notFound: {
      eyebrow: "404 / Proyek",
      title: "Proyek tidak ditemukan",
      description: "Proyek yang kamu cari belum tersedia. Jelajahi daftar proyek lainnya.",
    },
  },
  footer: {
    copyright: `© 2026 ${name}`,
    description: "Analisis sistem. Data. Web.",
    backToTop: { label: "Kembali ke atas", href: "#atas" },
  },
} as const;
