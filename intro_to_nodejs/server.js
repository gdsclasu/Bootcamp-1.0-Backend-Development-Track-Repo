// Constants
const PORT = 3000 || 8000
const HOSTNAME = "localhost"

const http = require("http")

const server = http.createServer((req, res) => {
  res.statusCode = 404
  res.setHeader("content-Type", "text/html")
  res.end(
    `<h1>Introduction to NodeJs</h1>
    <p>This is a response from a NodeJs server</p>`
  )
})

server.listen(PORT, HOSTNAME, () => {
  console.log(`Listening on PORT:${PORT} at http://${HOSTNAME}:${PORT}`)
})

console.log(`Listening on PORT:${PORT} at http://${HOSTNAME}:${PORT}`)