import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	schema: z.object({
		inProgress: z.boolean(),
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		link: z.string(),
		img_alt: z.string().optional(),
		img_src: z.string().optional(),
	}),
});

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.string(),
		tags: z.array(z.string()),
		link: z.string(),
		img_alt: z.string().optional(),
		img_src: z.string().optional(),
	}),
});

export const collections = {
	projects: projectsCollection,
	blog: blogCollection,
};