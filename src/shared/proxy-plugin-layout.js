// custom layout plugin
module.exports = function layout(key, {headers, body}) {
  return {
    headers,
    body: html(body)
  }
}

function html(body) {
  return `<!doctype html>
<html>
<body>
<h1>Hi from layout</h1>
${body}
</body>
</html>`
}
