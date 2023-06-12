import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Dev Mocks</h1>
      <h5>Estes são snippets em reactjs para utilizar de graça.</h5>
      <div className="cards__container">
        <div className="card">
          <a href="/grid">Grid</a>
        </div>
        <div className="card">
          <a href="/modal">Modal</a>
        </div>
      </div>
    </>
  );
}

export default App;
