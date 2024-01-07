import { useState } from "react";
import "./index.css";
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
  function handleReset() {
    setCount(0);
    setStep(1);
  }
  const date = new Date("13 july 2027");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today `
            : `${count} days ago `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
// import { useState } from "react";
// import "./index.css";
// export default function App() {

//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }
// function Counter() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);
//   const date = new Date("13 july 2027");
//   date.setDate(date.getDate() + count);
//   return (
//     <div>
//       <div>
//         <button onClick={() => setStep((c) => c - 1)}>-</button>
//         <span>Step:{step}</span>
//         <button onClick={() => setStep((c) => c + 1)}>+</button>
//       </div>
//       <div>
//         <button onClick={() => setCount((c) => c - step)}>-</button>
//         <span>Count:{count}</span>
//         <button onClick={() => setCount((c) => c + step)}>+</button>
//       </div>
//       <p>
//         <span>
//           {count === 0
//             ? "Today is "
//             : count > 0
//             ? `${count} days from today `
//             : `${count} days ago `}
//         </span>
//         <span>{date.toDateString()}</span>
//       </p>
//     </div>
//   );
// }
