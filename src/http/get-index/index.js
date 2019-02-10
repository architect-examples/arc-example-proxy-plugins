let arc = require('@architect/functions')

exports.handler = arc.proxy.public({

  // force index.html on any folder depth
  spa: true,

  // ssr
  ssr: '@architect/shared/ssr',

  // plugins act in order on file types
  plugins: {
    jsx: [
      '@architect/proxy-plugin-jsx', 
      '@architect/proxy-plugin-mjs-urls'
    ],
    mjs: [
      '@architect/proxy-plugin-bare-imports',
      '@architect/proxy-plugin-mjs-urls'
    ],
    tsx: [
      '@architect/proxy-plugin-tsx', 
      '@architect/proxy-plugin-mjs-urls'
    ],
    md: [
      '@architect/proxy-plugin-md',
      '@architect/shared/proxy-plugin-layout',
      '@architect/proxy-plugin-html-urls'
    ],
    scss: [
      '@architect/proxy-plugin-sass'
    ],
    html: [
      '@architect/proxy-plugin-html-urls'
    ]
  },

  // alias root rel paths to fully qualified root rel paths
  alias: {
    '/foobaz': '/home.md',
    '/css': '/style.scss'
  },

  // config for @architect/proxy-plugin-bare-imports
  imports: {
    'log': '/log.mjs'
  }
})
