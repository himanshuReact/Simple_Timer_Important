import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [isNumber, setIsNumber] = useState(false);
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    let timer;
    if (number > 0) {
      timer = setTimeout(() => {
        setNumber(number - 1);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [number]);

  const startNumbers = () => {
    setNumber(10);
  };

  const stopNumbers = () => {
    setResult(number);
    setNumber(0);
  };
  return (
    <div className="App">
      <div>{number > 0 ? number : "Press Start"}</div>
      <button onClick={startNumbers}>Start Numbers</button>
      <button onClick={stopNumbers}>Stop Numbers</button>
      {result > 0 && <div>Result : {result}</div>}
    </div>
  );
}
