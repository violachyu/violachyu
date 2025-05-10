/**
* @type {import('vite').UserConfig}
*/
export default {
  // Set the base directory for GitHub pages
  base: process.env.NODE_ENV === 'production' ? '/violachyu' : '/',
  build: {
    outDir: './dist',
    sourcemap: true,
  },
  publicDir: './public',
}