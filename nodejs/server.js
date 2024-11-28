console.log("nodejs")
const { Hmac } = require("crypto")
const http = require("http") //webサーバを使うためのモジュール
const PORT = 8080
const html = require("fs").readFileSync("./index.html") //ファイルを読み込むためのモジュール。syncは非同期を指す。

//webサーバを作ろう
const server = http.createServer((req, res) => {
  //ブラウザからアクセスが来た時の処理
  res.writeHead(200, { "content-Type": "text/html" })
  res.write(html)
  res.end()

  if (req.method == "GET") {
    console.log("GET ok")
  } else if (req.method == "POST") {
    console.log("POST ok")
  }
})

server.listen(PORT, () => {
  console.log("server running!")
})
