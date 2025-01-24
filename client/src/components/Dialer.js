import React, { useState } from "react";

const Dialer = () => {
  const [phoneNumber, setPhoneNumber] = useState("+8201001234567");

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value); // 사용자가 입력한 값을 상태로 저장
  };

  const call = () => {
    const ws = new WebSocket("ws://localhost:5000");
    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "call", from: phoneNumber })); // 상태 값 사용
    };
  };

  return (
    <div>
      <h2>전화 걸기</h2>
      <p>클라이언트 전화번호: {phoneNumber}</p>
      <input
        type="text"
        value={phoneNumber} // 상태 값 표시
        onChange={handleInputChange} // 입력 값 변경 처리
        placeholder="전화번호를 입력하세요"
      />
      <button onClick={call}>전화 걸기</button>
    </div>
  );
};

export default Dialer;