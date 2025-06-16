import { defineCollection, z } from 'astro:content';
// @ts-nocheck
const flower = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		latina: z.string(),
        pubDate: z.coerce.date(),
		// Transform string to Date object
		mainImage: z.string().optional(),
		level1: z.string().optional(),
		level2: z.string().optional(),
		level3: z.string().optional(),
		level4: z.string().optional(),
	}),
});
const insects = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		latina: z.string(),
        pubDate: z.coerce.date(),
		// Transform string to Date object
		mainImage: z.string().optional(),
		active: z.string().optional(),
		level1: z.string().optional(),
		level2: z.string().optional(),
		level3: z.string().optional(),
		level4: z.string().optional(),
		level5: z.string().optional(),
		flowertime: z.string().optional(),
		where: z.string().optional(),
	}),
});
const mushrooms = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		latina: z.string(),
        pubDate: z.coerce.date(),
		// Transform string to Date object
		mainImage: z.string().optional(),
	}),
});
export const collections = {
    'owady': insects,
    'kwiaty': flower,
    'grzyby': mushrooms,
  };