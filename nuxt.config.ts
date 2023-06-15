// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/image-edge',
    ],
    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
                },
            ],
        },
    },
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', '@/assets/css/global.css'],
    build: {
        transpile: ['vuetify', 'nuxt/app'],
    },
    imports: {
        autoImport: true
    },

    //
    // components: [{path: '@/components', pathPrefix: false}],

})



