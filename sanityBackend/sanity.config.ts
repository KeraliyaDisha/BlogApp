import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'BlogApp',

  projectId: '8f2poy14',
  dataset: 'blogdata',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
