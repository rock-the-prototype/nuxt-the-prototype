import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@invictus.codes/nuxt-vuetify',
  ],
  css: ['~/assets/variables.scss'],
  vuetify: {
    moduleOptions: {
      // ... (andere Optionen)
    },
    vuetifyOptions: {
      theme: {
        dark: true,  // Dark mode per default
        themes: {
          light: {
            primary: '#00ffff',   // Rock the Prototype Cyan / Aqua
            secondary: '#009999', // Persian Green
            accent: '#006b6b',    // Blue Stone
            background: '#242424'
          },
          dark: {
            primary: '#00ffff',
            secondary: '#009999',
            accent: '#006b6b',
            background: '#242424'
          }
        }
      }
    }
  }
  ,
    buildModules: {
    /* nuxt-vuetify module options */
    treeshaking: false,
    useIconCDN: true,

    /* vite-plugin-vuetify options */
    styles: true,
    autoImport: true,
    useVuetifyLabs: true,
  },
  build: {
    // Add Vue 3 specific compiler options here
    vue: {
      compilerOptions: {
        isCustomElement: (tag: string) => tag.startsWith('v-')
      }
    }
  },
  // For custom routes, consider using extendRoutes, but generally, it's not needed in Nuxt
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: 'custom',
  //       path: '/custom',
  //       component: resolve(__dirname, 'pages/custom.vue'),
  //     });
  //   },
  // },
})