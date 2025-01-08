import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const astuces = defineCollection({
  loader: glob({ base: './src/data/astuces', pattern: '**/[^_]*.{md,mdx}' }),
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(160),
    publishDate: z.coerce.date(),
    /*
    // Optional
    updatedDate: z.coerce.date().optional(),
    heroImage: z
      .object({
        src: image(),
        alt: z.string().optional(),
        color: z.string().optional()
      })
      .optional(),
    language: z.string().optional(),
    draft: z.boolean().default(false),
    // Integrations
    comment: z.boolean().default(true)
    */
  })
})

export const collections = { astuces }
