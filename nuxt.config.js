export default defineNuxtConfig({
    app: {
        head: {
            title: 'kovalenko-blog',
            titleTemplate: '%s | Kovalenko Yurii',
        },
    },
    css: ['~/assets/css/main.css'],
    modules: [
        '@nuxt/content',
        'nuxt-gtag',
        '@invictus.codes/nuxt-vuetify',
    ],
    gtag: {
        id: process.env.GOOGLE_TAG_MANAGER_ID
    },
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
            theme: 'github-dark',
        }
    }
});
