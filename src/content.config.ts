import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const experience = defineCollection({
  loader: glob({ base: "./src/content/experience", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      company: z.string(),
      role: z.string(),
      period: z.string(),
      logo: image(),
      order: z.number(),
      links: z.array(
        z.object({
          url: z.string(),
          label: z.string(),
        }),
      ),
    }),
});

const hackathons = defineCollection({
  loader: glob({ base: "./src/content/hackathons", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      date: z.string(),
      logo: image(),
      order: z.number(),
      links: z.array(
        z.object({
          url: z.string(),
          label: z.string(),
        }),
      ),
    }),
});

const sideProjects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      date: z.string(),
      logo: image().optional(),
      markdown: z.string().optional(),
      order: z.number(),
      links: z.array(
        z.object({
          url: z.string(),
          label: z.string(),
        }),
      ),
    }),
});

const interviews = defineCollection({
  loader: glob({ base: "./src/content/interviews", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      date: z.string(),
      logo: image(),
      order: z.number(),
      links: z.array(
        z.object({
          url: z.string(),
          label: z.string(),
        }),
      ),
    }),
});

export const collections = { experience, hackathons, sideProjects, interviews };
