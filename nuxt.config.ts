// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/nganiapps/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@fortawesome/fontawesome-free/css/all.css",
    "~/assets/style.css",
    "~/assets/sizing.css"
  ],
  ssr:false,
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Ngani',
      short_name: 'Ngani',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'logo512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'logo512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  },
  devtools: { enabled: true }
})
