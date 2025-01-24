import React from "react";
import Dialer from "./components/Dialer";
import Receiver from "./components/Receiver";

function App() {
  return (
    <div>
      <h1>전화번호 시스템</h1>
      <Dialer />
      <Receiver />
    </div>
  );
}

export default App;