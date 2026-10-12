type NavigationLink = {
  label: string;
  href: string;
};

type SiteSection = {
  id: string;
  title: string;
  description: string;
  status?: string;
};

export const site = {
  language: "id",
  name: "Fissya",
  homeHref: "/",
  topId: "atas",
  metadata: {
    title: "Fissya — Portofolio Sistem Informasi",
    description:
      "Portofolio mahasiswa Sistem Informasi: menghubungkan kebutuhan bisnis dengan teknologi melalui analisis sistem, data, dan web.",
  },
  navigationLabel: "Navigasi utama",
  navigation: [
    { label: "Proyek", href: "/#proyek" },
    { label: "Tentang", href: "/#tentang" },
    { label: "Kontak", href: "/#kontak" },
  ] satisfies NavigationLink[],
  accessibility: {
    mainId: "konten-utama",
    skipLink: { label: "Lewati ke konten utama", href: "#konten-utama" },
    homeLabel: "Fissya — beranda",
  },
  theme: {
    activateLight: "Aktifkan tema terang",
    activateDark: "Aktifkan tema gelap",
  },
  intro: {
    eyebrow: "Portofolio / Sistem Informasi",
    title: "Bisnis bertemu teknologi.",
    description:
      "Menghubungkan kebutuhan bisnis dengan solusi teknologi melalui analisis sistem, data, dan pengembangan web.",
  },
  sections: [
    {
      id: "proyek",
      title: "Proyek",
      status: "PLACEHOLDER / Belum ada proyek",
      description:
        "Proyek dan studi kasus akan ditambahkan di sini. Bagian ini belum menampilkan karya nyata.",
    },
    {
      id: "tentang",
      title: "Tentang",
      description:
        "Mahasiswa Sistem Informasi dengan fokus pada pertemuan bisnis dan teknologi: analisis sistem, pengolahan data, dan pengembangan web.",
    },
    {
      id: "kontak",
      title: "Kontak",
      status: "Segera tersedia",
      description:
        "Informasi kontak untuk peluang magang dan kerja akan ditambahkan di sini.",
    },
  ] satisfies SiteSection[],
  footer: {
    copyright: "© 2026 Fissya",
    description: "Analisis sistem. Data. Web.",
    backToTop: { label: "Kembali ke atas", href: "#atas" },
  },
} as const;
