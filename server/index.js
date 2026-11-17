const { fstat } = require("fs");
const http = require("http");

const server = http.createServer((req,res) => {
    console.log("요청 발생");
    res.setHeader("Content-Type","text/plain");
    const readStream = fstat.createReadStream(_dirname+ "/index.html","utf8");
    readStream.pipe(res);
});

//서버 실행
server.listen(3000,() => {
    console.log("3000번 포트에서 서버 실행 중");
});