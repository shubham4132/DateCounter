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
  const [step, setStep] = useState(0);
  const date = new Date("13 july 2027");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        step:{step}
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        count:{count}
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
      <div>
        <span>{`${count} days from today is ${date.toDateString()}`}</span>
      </div>
    </>
  );
}
