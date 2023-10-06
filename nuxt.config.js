export default defineNuxtConfig({
    app: {
        // htmlAttrs: {
        //   lang: 'en'
        // },
        head: {
            title: 'kovalenko-blog',
            titleTemplate: '%s | Kovalenko Yurii',
        },

        // { charset: 'utf-8' },
        // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // { hid: 'description', name: 'description', content: '' },
        // { name: 'format-detection', content: 'telephone=no' }
        // link: [
        //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        // ]
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    // plugins: [
    // ],
    //
    // // Auto import components: https://go.nuxtjs.dev/config-components
    // components: true,
    css: ['~/assets/css/main.css'],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxt/content',
        // '@nuxtjs/gtm',
        '@invictus.codes/nuxt-vuetify',
    ],

    // publicRuntimeConfig: {
    //   gtm: {
    //     id: process.env.GOOGLE_TAG_MANAGER_ID
    //   }
    // },
    vuetify: {
        vuetifyOptions: {
            theme: {
                defaultTheme: 'light',
                themes: {
                    light: {
                        colors: {
                            primary: '#1d4b7c',
                            secondary: '#edf7fd',
                            accent: '#82B1FF',
                            error: '#FF5252',
                            info: '#2196F3',
                            success: '#4CAF50',
                            warning: '#FFC107',
                        }
                    }
                }
            }
        },
    },
    content: {
        markdown: {
            anchorLinks: false,
        },
        highlight: {
            // Theme used in all color schemes.
            theme: 'github-dark',
        }
    },
//     moduleOptions: {
//         treeshaking: true,
//     }
// }

// // Build Configuration: https://go.nuxtjs.dev/config-build
// build: {
// },
// target: 'static',
// content: {
//   markdown: {
//     prism: {
//       theme: 'prism-themes/themes/prism-cb.css'
//     }
//   }
// }
})
;
