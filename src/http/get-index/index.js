let arc = require('@architect/functions')

exports.handler = arc.proxy.public({
  spa: true,
  plugins: {
    // plugins act in order on file types
    jsx: [
      '@architect/proxy-plugin-jsx', 
      '@architect/proxy-plugin-mjs-urls'
    ],
    mjs: [
      '@architect/proxy-plugin-mjs-urls'
    ],
    tsx: [
      '@architect/proxy-plugin-tsx', 
      '@architect/proxy-plugin-mjs-urls'
    ],
    md: [
      '@architect/proxy-plugin-md',
      '@architect/shared/proxy-plugin-layout'
    ],
    scss: [
      '@architect/proxy-plugin-sass'
    ]
  }
})
