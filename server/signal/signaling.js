const WebSocket = require("ws");
let clients = [];

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    console.log("클라이언트 연결됨");
    clients.push(ws);

    ws.on("message", (message) => {
      const data = JSON.parse(message);
      console.log("받은 메시지:", data);

      // 신호 교환 처리
      switch (data.type) {
        case "call":
          broadcast({ type: "incoming-call", from: data.from });
          break;
        case "accept":
          broadcast({ type: "call-accepted", to: data.to });
          break;
        case "reject":
          broadcast({ type: "call-rejected", to: data.to });
          break;
        default:
          console.error("알 수 없는 메시지 유형:", data.type);
      }
    });

    ws.on("close", () => {
      clients = clients.filter((client) => client !== ws);
      console.log("클라이언트 연결 해제");
    });
  });
}

function broadcast(message) {
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
}

module.exports = { setupWebSocket };