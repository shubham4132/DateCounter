import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("13 july 2027");
  date.setDate(date.getDate() + count);
  function handleReset() {
    setCount(0);
    setStep(1);
  }
  return (
    <>
      <div>
        <input
          type="range"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          min="0"
          max="10"
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <br />
      <div>
        <span>
          {count === 0
            ? "today is "
            : count > 0
            ? `${count} day from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
      <br />
      <div>
        <button onClick={() => handleReset()}>Reset</button>
      </div>
    </>
  );
}
