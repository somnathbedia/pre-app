import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count === 20 || count >= 20) return setCount(count);

    setCount(count + 1);
  };
  const decrement = () => {
    if (count == 0) {
      return;
    }
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <section className="mt-32 mb-24 w-1/2">
      <p className="text-lg">Count is {count}</p>
      <div className="flex justify-center gap-4 text-sm">
        <div>
          {" "}
          <button onClick={decrement}>-Decrement</button>
        </div>
        <div>
          <button onClick={increment}>+Increment</button>
        </div>
      </div>
      <div
        className="
            flex
            justify-center
            text-sm
        "
      >
        <div>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
