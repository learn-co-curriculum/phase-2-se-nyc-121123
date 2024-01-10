import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(10);

  function increment() {
    console.log("clicked");
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="counters">
      <h1>{counter}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
