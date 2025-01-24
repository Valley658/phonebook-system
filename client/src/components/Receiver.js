import React, { useEffect } from "react";

const Receiver = () => {
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "incoming-call") {
        alert(`수신된 전화: ${message.from}`);
      }
    };
  }, []);

  return <h2>전화 수신 대기 중...</h2>;
};

export default Receiver;