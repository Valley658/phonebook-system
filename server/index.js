require("dotenv").config();
const express = require("express");
const http = require("http");
const { setupWebSocket } = require("./signal/signaling");

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

// WebSocket 서버 설정
setupWebSocket(server);

// 기본 라우트
app.get("/", (req, res) => {
  res.send("서버 실행 중");
});

// 서버 시작
server.listen(PORT, () => {
  console.log(`서버 전화번호: +8205001234567`);
  console.log(`서버가 ${PORT}에서 실행 중입니다.`);
});