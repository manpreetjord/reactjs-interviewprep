import React from "react";
import useCounter from "./useCounter";


function Counter (){
  const {increment, decrement, reset, count} = useCounter(0, 2);
  return (
    <div>
        count: {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
