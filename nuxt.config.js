export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '크루드시스템 | 쑥 메세지',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '기업과 고객을 쉽게 연결하는 IT 서비스 기업 크루드시스템 입니다.' },
      { name: 'keywords', content: '시스템 구축,시스템 유지보수,구축,유지보수,개발,쑥 메세지,플랫폼, 크루드시스템, 크루드 시스템, CRUD, CRUDSYSTEM,메세지,문자메세지,알림톡,카카오톡,친구톡' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'naver-site-verification', content: '84fe684ba15b76c4eae92af6cca8c184007262fb' },
      { name: 'og:title', content: '크루드시스템 | 쑥 메세지' },
      { name: 'og:site_name', content: 'crudsystem.com' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://www.crudsystem.com/' },
      { name: 'og:description', content: '기업 비즈니스 역량을 키울 수 있는 비즈 메세지를 서비스하고 있습니다.' },
      { name: 'google-site-verification', content: 'uKQ8ykKH0BZ3cYHankgnVCyodkaFqLB63EJ5kPb1STU' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://www.crudsystem.com' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'G-70GLBN20NZ'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    ['nuxt-gmaps', {
      key: 'AIzaSyDVkoc3lnuxLrkMP0wOorTE8-HM-JWrGBA'
    }],
    '@nuxtjs/robots',
  ],
  robots: {
    UserAgent: '*',
    Allow:'/'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
