import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset   = process.env.NEXT_PUBLIC_SANTIY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'Blumencafe_Studio',
  title: 'Blumencafe Studio',
  projectId: projectId,
  dataset: dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio:{
    components:{
      navbar: StudioNavbar
    }
  },
  theme: myTheme
})
