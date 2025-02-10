import {defineField, defineType} from 'sanity'
import menuItem from './objects/nav'

export default defineType({
    name: 'navbar',
    title: 'Navbar',
    type: 'document',
    fields: [
      defineField({
        name: 'menuItems',
        title: 'Menu Items',
        type: 'array',
        of: [menuItem],
      }),
    ],
  })
  
