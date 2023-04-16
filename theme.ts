import { buildLegacyTheme } from "sanity";

const props = {
    '--my-white': '#fff',
    '--my-black': '#1a1a1a',
    '--my-bg': '#f7f9fa',
    '--my-main': '#0F3D3E',
    '--my-red': '#db4437',
    '--my-yellow': '#f4b400',
    '--my-green': '#0f9d58',
}

export const myTheme = buildLegacyTheme({
    /* Base theme colors */
    '--black': props['--my-bg'],
    '--white': props['--my-black'],
  
    '--gray': '#666',
    '--gray-base': '#666',
  
    '--component-bg': props['--my-bg'],
    '--component-text-color': props['--my-main'],
  
    /* Brand */
    '--brand-primary': props['--my-main'],
  
    // Default button
    '--default-button-color': '#666',
    '--default-button-primary-color': props['--my-main'],
    '--default-button-success-color': props['--my-green'],
    '--default-button-warning-color': props['--my-yellow'],
    '--default-button-danger-color': props['--my-red'],
  
    /* State */
    '--state-info-color': props['--my-main'],
    '--state-success-color': props['--my-green'],
    '--state-warning-color': props['--my-yellow'],
    '--state-danger-color': props['--my-red'],
  
    /* Navbar */
    '--main-navigation-color': props['--my-bg'],
    '--main-navigation-color--inverted': props['--my-black'],
  
    '--focus-color': props['--my-main'],
  })
  
