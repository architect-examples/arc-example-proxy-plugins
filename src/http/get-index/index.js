let arc = require('@architect/functions')

exports.handler = arc.proxy.public({

  // force index.html on any folder depth
  spa: true,

  // ssr
  //ssr: './ssr',
  ssr: '@architect/shared/ssr',
  /*
  async ssr(req, config) {
    let {headers, body} = await proxy.read('index.html', config)
    let ts = new Date(Date.now()).toISOString()
    body = body.replace('</body>', `<code>inline rendered ${ts}</code><br></body>`)
    return {headers, body} 
  },*/

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
      '@architect/shared/proxy-plugin-layout'
    ],
    scss: [
      '@architect/proxy-plugin-sass'
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
