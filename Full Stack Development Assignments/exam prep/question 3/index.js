import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
    res.writeHead(200, `Content-Type: text/plain`)
    const q = url.parse(req.url, true)
    const txt = q.query.name + " " + q.query.age;
    res.end(txt);
})

server.listen(3000, () => {
    console.log("listening on http://localhost:3000")
})