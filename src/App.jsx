import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Dev Mocks</h1>
      <a href="/grid">Grid</a>
      <a href="/modal">Modal</a>
    </>
  );
}

export default App;
