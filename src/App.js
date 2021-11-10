import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const [num, setNum] = useState("");
  const [lastNum, setLastNum] = useState("");

  const [operator, setOperator] = useState("");

  const handleInput = ({ target: { value } }) => {
    setDisplay(display + value);

    if (operator === "") {
      setNum(display + value);
    } else {
      setLastNum(display + value);
    }
  };

  const handleOperator = ({ target: { value } }) => {
    setDisplay("");
    if (num.length > 0) {
      setOperator(value);
    } else {
      setNum(display);
      setDisplay("");
      setOperator(value);
    }
  };

  const handleResult = () => {
    if (operator === "/") setDisplay(num / lastNum);
    if (operator === "*") setDisplay(num * lastNum);
    if (operator === "-") setDisplay(num - lastNum);
    if (operator === "+") setDisplay(parseFloat(num) + parseFloat(lastNum));

    setNum("");
    setLastNum("");
    setOperator("");
  };

  const handleClear = () => {
    setDisplay("");
    setNum("");
    setLastNum("");
    setOperator("");
  };

  const handleClearEntry = () => {
    const newNum = display.substring(0, display.length - 1);

    setDisplay(newNum);

    if (operator === "") {
      setNum(newNum);
    } else {
      setLastNum(newNum);
    }
  };

  return (
    <div className="app">
      <main className="calculator">
        <header className="display">
          <p className="operator">{operator !== "" ? num + operator : ""}</p>
          <p>{display}</p>
        </header>
        <div className="keypad">
          <button className="ac" onClick={handleClear}>AC</button>
          <button className="blue" onClick={handleOperator} value={"/"}>/</button>

          <button className="gray" onClick={handleInput} value={7}>7</button>
          <button className="gray" onClick={handleInput} value={8}>8</button>
          <button className="gray" onClick={handleInput} value={9}>9</button>
          <button className="blue" onClick={handleOperator} value={"*"}>*</button>

          <button className="gray" onClick={handleInput} value={4}>4</button>
          <button className="gray" onClick={handleInput} value={5}>5</button>
          <button className="gray" onClick={handleInput} value={6}>6</button>
          <button className="blue" onClick={handleOperator} value={"-"}>-</button>

          <button className="gray" onClick={handleInput} value={1}>1</button>
          <button className="gray" onClick={handleInput} value={2}>2</button>
          <button className="gray" onClick={handleInput} value={3}>3</button>
          <button className="blue" onClick={handleOperator} value={"+"}>+</button>

          <button className="gray" onClick={handleInput} value={0}>0</button>
          <button className="gray" onClick={handleInput} value={"."}>.</button>
          <button className="gray" onClick={handleClearEntry}>CE</button>
          <button onClick={handleResult}>=</button>
        </div>
      </main>
    </div>
  );
}

export default App;
