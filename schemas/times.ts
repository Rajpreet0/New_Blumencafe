import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'times',
  title: 'Uhrzeiten',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tag',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Uhrzeit',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    })
  ],

  
})
