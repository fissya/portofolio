import { mkdir, readFile, writeFile } from "node:fs/promises";
import vm from "node:vm";
import ts from "typescript";

// Generate a deliberately simple, one-page placeholder without new dependencies.
// All copy comes from site.ts. Run: node scripts/generate-cv.mjs
const source = await readFile(new URL("../src/content/site.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const context = vm.createContext({ exports: {} });
vm.runInContext(compiled, context);
const { site } = context.exports;
const labels = site.cv.document;

function plainText(value) {
  return String(value).normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u2010-\u2015]/g, "-")
    .replace(/[^\x20-\x7e]/g, " ");
}

function pdfText(value) {
  return plainText(value).replace(/[\\()]/g, "\\$&");
}

function wrapText(value, limit = 82) {
  const lines = [];
  let line = "";
  for (let word of plainText(value).split(/\s+/)) {
    if (line && line.length + word.length + 1 > limit) {
      lines.push(line);
      line = "";
    }
    while (word.length > limit) {
      lines.push(word.slice(0, limit));
      word = word.slice(limit);
    }
    line = line ? `${line} ${word}` : word;
  }
  if (line) lines.push(line);
  return lines;
}

const commands = [];
let cursorY = 794;

function text(value, { font = "F1", size = 10, color = "0.094 0.094 0.106", x = 48, y = cursorY } = {}) {
  commands.push(`BT /${font} ${size} Tf ${color} rg 1 0 0 1 ${x} ${y} Tm (${pdfText(value)}) Tj ET`);
}

function paragraph(value, options = {}) {
  for (const line of wrapText(value, options.limit ?? 82)) {
    text(line, options);
    cursorY -= options.leading ?? 14;
  }
}

function heading(value) {
  cursorY -= 20;
  text(value, { font: "F2", size: 12 });
  cursorY -= 20;
}

text(labels.title.toUpperCase(), { font: "F3", size: 10 });
cursorY -= 42;
text(site.name, { font: "F2", size: 30 });
cursorY -= 24;
text(site.headline, { size: 13 });
cursorY -= 22;
commands.push(`0.82 0.82 0.85 RG 0.5 w 48 ${cursorY} m 547 ${cursorY} l S`);
cursorY -= 24;
commands.push(`0.784 1 0.239 rg 48 ${cursorY - 7} 100 20 re f`);
text(labels.badge, { font: "F2", size: 9, x: 56 });
cursorY -= 25;
paragraph(labels.notice, { size: 9, leading: 13, limit: 90 });
heading(labels.bioTitle);
paragraph(site.bio);
heading(labels.skillsTitle);
paragraph(site.skills.join(" / "));
heading(labels.educationTitle);
for (const entry of site.education) {
  text(`${entry.period} | ${entry.degree}`, { font: "F2", size: 10 });
  cursorY -= 15;
  text(entry.institution, { size: 10 });
  cursorY -= 22;
}
heading(labels.contactTitle);
paragraph(`${site.contactUi.emailLabel}: ${site.email}`);
paragraph(`${site.contactUi.githubLabel}: ${site.githubUrl}`);
paragraph(`${site.contactUi.linkedinLabel}: ${site.linkedinUrl}`);
if (cursorY < 85) throw new Error("Placeholder CV exceeds one page; shorten the content.");
commands.push("0.82 0.82 0.85 RG 0.5 w 48 64 m 547 64 l S");
text(labels.footer, { size: 8, color: "0.36 0.36 0.41", y: 48 });

const stream = commands.join("\n");
const objects = [
  `<< /Type /Catalog /Pages 2 0 R /Lang (${pdfText(site.language)}) >>`,
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 4 0 R /F2 5 0 R /F3 6 0 R >> >> /Contents 7 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Courier /Encoding /WinAnsiEncoding >>",
  `<< /Length ${Buffer.byteLength(stream, "ascii")} >>\nstream\n${stream}\nendstream`,
  `<< /Title (${pdfText(`${labels.title} - ${labels.badge}`)}) /Author (${pdfText(site.name)}) /Subject (${pdfText(labels.notice)}) >>`,
];
let pdf = "%PDF-1.4\n";
const offsets = [0];
objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf, "ascii"));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});
const xrefOffset = Buffer.byteLength(pdf, "ascii");
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (const offset of offsets.slice(1)) pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R /Info 8 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;
await mkdir(new URL("../public/", import.meta.url), { recursive: true });
await writeFile(new URL("../public/cv.pdf", import.meta.url), Buffer.from(pdf, "ascii"));
console.log("Created public/cv.pdf: one-page placeholder from site.ts.");
