import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Contact Us',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Format: 62812345678 (without +)',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {name: 'street', type: 'string', title: 'Street Address'},
        {name: 'city', type: 'string', title: 'City'},
        {name: 'province', type: 'string', title: 'Province'},
        {name: 'postalCode', type: 'string', title: 'Postal Code'},
        {name: 'country', type: 'string', title: 'Country', initialValue: 'Indonesia'},
      ],
    }),
    defineField({
      name: 'mapUrl',
      title: 'Google Maps Embed URL',
      type: 'text',
      description: 'Google Maps embed URL (paste the src from iframe code)',
      rows: 3,
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'day', type: 'string', title: 'Day'},
            {name: 'hours', type: 'string', title: 'Hours', description: 'e.g., "08:00 - 17:00"'},
          ],
        },
      ],
    }),
    defineField({
      name: 'social',
      title: 'Social Media',
      type: 'object',
      fields: [
        {name: 'instagram', type: 'url', title: 'Instagram'},
        {name: 'facebook', type: 'url', title: 'Facebook'},
        {name: 'linkedin', type: 'url', title: 'LinkedIn'},
        {name: 'twitter', type: 'url', title: 'Twitter'},
        {name: 'youtube', type: 'url', title: 'YouTube'},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'email',
    },
  },
})
