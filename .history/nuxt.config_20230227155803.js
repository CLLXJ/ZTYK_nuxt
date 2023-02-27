export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '昭通优课科技有限公司',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    { src: '~/plugins/pdf.js', ssr: false },
    // { src: '~/plugins/pdf.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    extend(config,ctx){

      　　config.node = {
      
      　　　　fs:"empty"
      
      　　}
      
      }
  //   extend(config, ctx) {
  //    config.output.globalObject = 'this'
  //    config.module.rules.push(
  //      {
  //        test: /\.pdf$/,
  //        loader: 'url-loader'
  //      }
  //    )
  //  }
}
}
