import React, { useEffect } from "react";

const Audio = () => {
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        console.log("마이크 스트림 시작됨:", stream);
      })
      .catch((err) => {
        console.error("마이크 활성화 실패:", err);
      });
  }, []);

  return <div>마이크 활성화 완료</div>;
};

export default Audio;