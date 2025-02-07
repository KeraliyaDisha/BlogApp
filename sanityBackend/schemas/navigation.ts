import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'navbar',
    title: 'Navbar',
    type: 'document',
    fields: [
      defineField({
        name: 'menuItems',
        title: 'Menu Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              defineField({
                name: 'title',
                title: 'Title',
                type: 'string',
              }),
              defineField({
                name: 'link',
                title: 'Link',
                type: 'string',
              }),
            ],
          },
        ],
      }),
    ],
  })
  
