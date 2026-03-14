import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Company',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'About Artulase',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short catchy phrase',
    }),
    defineField({
      name: 'description',
      title: 'Company Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image',
      title: 'About Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'yearEstablished',
      title: 'Year Established',
      type: 'number',
      validation: (Rule) => Rule.integer().positive().max(new Date().getFullYear()),
    }),
    defineField({
      name: 'mission',
      title: 'Mission',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'vision',
      title: 'Vision',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'values',
      title: 'Company Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Value Title'},
            {name: 'description', type: 'text', title: 'Description'},
          ],
        },
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Company Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'number', type: 'string', title: 'Number', description: 'e.g., "500+"'},
            {name: 'label', type: 'string', title: 'Label', description: 'e.g., "Happy Clients"'},
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
