<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio Website: Panduan untuk Agent

## Tujuan
Portofolio mahasiswa Sistem Informasi untuk melamar magang dan kerja.
Positioning: jembatan antara bisnis dan teknologi (analisis sistem, data,
web). Harus cepat, responsif, aksesibel, dan mudah dikembangkan.

## Stack
Next.js (App Router), TypeScript strict, Tailwind CSS, Framer Motion, Zod.
Dilarang menambah dependency baru tanpa izin.

## Struktur
- src/app/         -> halaman
- src/components/  -> ui/ (Button, Card, Tag) dan sections/ (Hero, dll.)
- src/content/     -> site.ts dan projects.ts (SEMUA teks dan data di sini)
- src/lib/         -> utilitas
- public/          -> gambar dan aset

## Aturan
- Teks, proyek, dan link tidak boleh ditulis langsung di komponen.
- Komponen kecil, satu tanggung jawab, tipe ketat.
- Mobile-first. Dukung dark dan light mode.
- HTML semantik, alt text, kontras cukup, bisa dipakai dengan keyboard.
- Animasi halus dan hormati prefers-reduced-motion.
- Gambar pakai next/image.

## Desain: "Dark Editorial Tech"
Background #0B0B0F, surface #14141A, border #23232C, teks #F4F4F5 dan
#A1A1AA, satu aksen lime #C8FF3D (CSS variable). Font: Space Grotesk
(judul, sangat besar), Inter (isi), JetBrains Mono (label kecil).
Minimalis, banyak ruang kosong, tanpa gradient pelangi.

## Definisi selesai
`npm run lint` dan `npm run build` lulus tanpa error; tampilan benar di
lebar 375px dan 1280px.

## Cara kerja
Untuk tugas besar, jelaskan rencana dulu sebelum mengubah file.
Setelah selesai, ringkas file apa saja yang diubah.

## Konten
Semua proyek sekarang PLACEHOLDER dan diberi label jelas di datanya.