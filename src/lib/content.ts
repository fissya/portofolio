import { z } from "zod";
import { projects as rawProjects } from "@/content/projects";
import { site as rawSite } from "@/content/site";

const textSchema = z.string().trim().min(1, "Teks wajib diisi.");
const slugSchema = textSchema.regex(
  /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  "Gunakan slug huruf kecil, angka, dan tanda hubung.",
);
const httpsUrlSchema = z.url({ protocol: /^https$/ });
const internalHrefSchema = textSchema.regex(
  /^(?:\/(?!\/)[^\s]*|#[a-z][a-z0-9-]*)$/i,
  "Tautan internal harus diawali / atau #.",
);
const internalLinkSchema = z.strictObject({
  label: textSchema,
  href: internalHrefSchema,
});

const bioSchema = textSchema.refine(
  (value) => {
    const sentences = value.split(/(?<=[.!?])\s+/u);
    return sentences.length === 3 && sentences.every((sentence) => /[.!?]$/.test(sentence));
  },
  "Bio harus terdiri dari tiga kalimat lengkap.",
);

export const siteSchema = z.strictObject({
  placeholder: z.literal(true),
  placeholderLabel: textSchema,
  language: z.literal("id"),
  name: textSchema,
  headline: textSchema,
  bio: bioSchema,
  email: z.email(),
  githubUrl: httpsUrlSchema,
  linkedinUrl: httpsUrlSchema,
  skills: z.array(textSchema).min(1, "Isi setidaknya satu skill."),
  education: z.array(z.strictObject({
    id: slugSchema,
    period: textSchema,
    degree: textSchema,
    institution: textSchema,
    description: textSchema,
    placeholder: z.literal(true),
  })).min(1),
  aboutUi: z.strictObject({
    sectionId: slugSchema,
    skillsTitle: textSchema,
    educationTitle: textSchema,
  }),
  contactUi: z.strictObject({
    sectionId: slugSchema,
    emailLabel: textSchema,
    githubLabel: textSchema,
    linkedinLabel: textSchema,
    cvNotice: textSchema,
  }),
  marquee: z.strictObject({
    label: textSchema,
    pauseLabel: textSchema,
    resumeLabel: textSchema,
  }),
  homeHref: internalHrefSchema,
  topId: slugSchema,
  metadata: z.strictObject({
    title: textSchema,
    description: textSchema,
  }),
  navigationLabel: textSchema,
  navigation: z.array(
    z.strictObject({
      label: textSchema,
      href: internalHrefSchema,
      sectionId: slugSchema,
    }),
  ).min(1),
  cv: z.strictObject({
    label: textSchema,
    href: internalHrefSchema,
    document: z.strictObject({
      title: textSchema,
      badge: textSchema,
      notice: textSchema,
      bioTitle: textSchema,
      skillsTitle: textSchema,
      educationTitle: textSchema,
      contactTitle: textSchema,
      footer: textSchema,
    }),
  }),
  accessibility: z.strictObject({
    mainId: slugSchema,
    skipLink: internalLinkSchema,
    homeLabel: textSchema,
  }),
  theme: z.strictObject({
    activateLight: textSchema,
    activateDark: textSchema,
  }),
  intro: z.strictObject({
    eyebrow: textSchema,
    description: textSchema,
    primaryAction: internalLinkSchema,
    secondaryAction: internalLinkSchema,
  }),
  sections: z.array(
    z.strictObject({
      id: slugSchema,
      number: textSchema.regex(/^\d{2}$/),
      title: textSchema,
      description: textSchema,
      status: textSchema.optional(),
    }),
  ).min(1),
  projectUi: z.strictObject({
    sectionId: slugSchema,
    basePath: textSchema.regex(/^\/[a-z0-9-]+$/),
    placeholderBadge: textSchema,
    detailLinkLabel: textSchema,
    detailEyebrow: textSchema,
    placeholderNotice: textSchema,
    labels: z.strictObject({
      summary: textSchema,
      role: textSchema,
      year: textSchema,
      problem: textSchema,
      solution: textSchema,
      result: textSchema,
      techStack: textSchema,
      demo: textSchema,
      repo: textSchema,
    }),
    backToProjects: internalLinkSchema,
    navigation: z.strictObject({
      label: textSchema,
      previous: textSchema,
      next: textSchema,
    }),
    notFound: z.strictObject({
      eyebrow: textSchema,
      title: textSchema,
      description: textSchema,
    }),
  }),
  footer: z.strictObject({
    copyright: textSchema,
    description: textSchema,
    backToTop: internalLinkSchema,
  }),
});

export const projectSchema = z.strictObject({
  slug: slugSchema,
  title: textSchema,
  summary: textSchema,
  role: textSchema,
  tags: z.array(textSchema).min(1, "Isi setidaknya satu tag."),
  year: z.number().int().min(2000).max(2100),
  problem: textSchema,
  solution: textSchema,
  result: textSchema,
  demoUrl: httpsUrlSchema,
  repoUrl: httpsUrlSchema,
  placeholder: z.literal(true),
});

export const projectsSchema = z.array(projectSchema).min(1).superRefine((projects, context) => {
  const slugs = new Set<string>();
  projects.forEach((project, index) => {
    if (slugs.has(project.slug)) {
      context.addIssue({
        code: "custom",
        path: [index, "slug"],
        message: "Slug proyek harus unik.",
      });
    }
    slugs.add(project.slug);
  });
});

export const contentSchema = z.strictObject({
  site: siteSchema,
  projects: projectsSchema,
});

export type Site = z.infer<typeof siteSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Content = z.infer<typeof contentSchema>;

// Parse both datasets at module load. RootLayout imports this module, so
// next build must validate even projects that are not yet displayed.
// Do not catch this error or replace invalid data with fallback content.
export const { site, projects } = contentSchema.parse({
  site: rawSite,
  projects: rawProjects,
});
