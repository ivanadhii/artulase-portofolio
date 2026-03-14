import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'team',
  title: 'Team Members',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'social',
      title: 'Social Media',
      type: 'object',
      fields: [
        {name: 'linkedin', type: 'url', title: 'LinkedIn'},
        {name: 'instagram', type: 'url', title: 'Instagram'},
        {name: 'facebook', type: 'url', title: 'Facebook'},
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which team members appear',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'photo',
    },
  },
})
