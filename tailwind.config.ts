import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{html,js,svelte,ts}', // Ensure this includes all the files where Tailwind is used
    'node_modules/flowbite-svelte/**/*.{js,svelte,ts}', // Flowbite components
  ],

  theme: {
    extend: {
      colors: {
        customBlue:  '#23395B',
        customBlue1: '#406E8E',
        customGreen: '#4CBA85',
      },
    },
  },

  plugins: [
    typography,              // Add the typography plugin
    require('flowbite/plugin') // Add the Flowbite plugin
  ],
};

export default config;
