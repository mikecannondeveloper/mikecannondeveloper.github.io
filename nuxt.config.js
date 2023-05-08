// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'S. Michael Cannon',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Over engineered resume site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    // Simple usage
    ['@nuxtjs/google-analytics', {
      id: 'UA-73202553-1'
    }]
 ],
 target: 'static'
}
