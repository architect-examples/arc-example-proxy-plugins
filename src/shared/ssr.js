let arc = require('@architect/functions')

module.exports = async function ssr(req, config) {
  let {headers, body} = await arc.proxy.read('index.html', config)
  let ts = new Date(Date.now()).toISOString()
  body = body.replace('</body>', `<code>shared rendered ${ts}</code><br></body>`)
  return {headers, body} 
}
