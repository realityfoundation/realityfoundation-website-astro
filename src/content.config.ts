import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    series: z.string().optional(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    liveUrl: z.url().optional(),
    githubUrl: z.url().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

const jobs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/jobs" }),
  schema: z.object({
    title:          z.string(),
    summary:        z.string(),
    kind:           z.enum(["role", "open"]).default("role"),
    team:           z.enum(["Engineering", "Security", "Commercial", "Strategy", "Open"]),
    status:         z.enum(["open", "coming-soon", "closed"]).default("open"),
    order:          z.number().default(0),
    locations:      z.array(z.string()).default(["Brussels", "Remote"]),
    workMode:       z.enum(["hybrid", "remote-eu", "onsite"]).default("hybrid"),
    employmentType: z.string().default("Full-time, permanent"),
    salaryMin:      z.number().optional(),
    salaryMax:      z.number().optional(),
    salaryCurrency: z.string().default("EUR"),
    salaryPeriod:   z.enum(["year", "month"]).default("year"),
    salaryNote:     z.string().optional(),
    workingSession: z.string().optional(),
    applyMode:      z.enum(["form", "email", "none"]).default("form"),
    applyEmail:     z.string().optional(),
    websiteFields:  z
      .array(z.enum(["linkedin", "x", "github", "scholar", "portfolio"]))
      .default(["linkedin", "x", "github", "scholar", "portfolio"]),
    datePosted:     z.coerce.date(),
    validThrough:   z.coerce.date().optional(),
  }),
});

export const collections = { blog, projects, jobs };
