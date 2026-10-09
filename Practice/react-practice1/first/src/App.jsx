import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <Production />
      <ToggleButton />
      <SetCounterTimer />
    </div>
  );
}
export default App;

function Production() {
  return <div>Hello</div>;
}

function ToggleButton() {
  const [state, setstate] = useState(true);
  return (
    <div>
      <button onClick={() => setstate(!state)}>Toggle Message</button>
      {state && <p>This message is Conditionally Rendered!!</p>}
    </div>
  );
}

function SetCounterTimer() {
  const [count, setCount] = useState(0);
  console.log("SetCounterTimer Rendered");

  function startCounter() {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={startCounter}>Start</button>
    </div>
  );
}

function setCounterTimerUseEffect() {
  const [count, setcount] = useState(0);
  console.log("SetCounterTimerUseEffect Rendered");

  useEffect(() => {
    setInterval(() => {
      setcount((count) => count + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={startCounter}>Start</button>
    </div>
  );
}
