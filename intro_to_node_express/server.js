// ES5
// const http = require("http")

// ES6
import http from "http"; // used for req (client) and res (server)
import fs from "fs";

// status codes: 100 - 199 -> informational
// status codes: 200 - 299 -> successful
// status codes: 300 - 399 -> Redirection
// status codes: 400 - 499 -> client error
// status codes: 500 - 599 -> server error

// Constants
const PORT = 3000 || 8000;
const HOSTNAME = "localhost"; // "127.0.0.1"
const filename = "example.txt";
const encoding = "utf8";
const content = `Line 1\nLine 2\nLine 3\nLine 4`;

const read_file = async (filename, encoding) => {
  fs.readFile(filename, encoding, (content, error) => {
    if (error) {
      console.log(error);
    }

    console.log("File read successfully");
    console.log(content);
  });
}

const delete_file = async (filename) => {
  fs.unlink(filename, () => {
    console.log("File deleted successfully");
  });
}

const write_file = async (filename, content) => {
  fs.writeFile(filename, content, (error) => {
    if (error) {
      console.log(error);
    }
    console.log("File created successfully");
  });
}

// fs.readFile("example.txt", "utf8", (content, error) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log("File read successfully")
//   console.log(content)
// });

// fs.rename("example.txt", "example2.txt", error => {
//   if (error)
//     console.log(error)

//   console.log("File successfully renamed")
// })

const server = http.createServer(async (req, res) => {
  // res.statusCode = 200
  // MIME
  // res.setHeader = {"content-Type":"text/plain"}
  res.writeHead(200, { "content-Type": "text/plain" });
  res.write("Homepage");
  await write_file(filename, content);
  await read_file(filename, encoding);
  await delete_file(filename);
  res.end();
});

server.listen(PORT, () => {
  console.log(`listening on PORT:${PORT} @ http://${HOSTNAME}:${PORT}`);
});
