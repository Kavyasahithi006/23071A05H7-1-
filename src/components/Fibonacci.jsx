// components/Fibonacci.jsx
import { useState } from "react";

function Fibonacci() {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState([]);

  const generateFibonacci = () => {
    const n = parseInt(num);
    if (isNaN(n) || n < 1) {
      setResult(["Please enter a valid positive number"]);
      return;
    }

    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    setResult(fib.slice(0, n));
  };

  return (
    <div className="container">
      <h2>Fibonacci Generator</h2>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter number of terms"
      />
      <button onClick={generateFibonacci}>Generate</button>
      <p>{Array.isArray(result) ? result.join(", ") : result}</p>
    </div>
  );
}

export default Fibonacci;
