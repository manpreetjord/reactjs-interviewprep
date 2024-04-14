import React, { useRef, useState } from "react";

const UseRefHook = () => {
  const [count, setCount] = useState(0);

  const ref = useRef(0);
  const inputRef = useRef(null);

  console.log(inputRef.current);

  return (
    <div>
      UseRefHook
      <h4>Q. What is a useRef Hook?</h4>
      <p>
        Ans. useRef is a hook used to create a mutable reference that persists
        across renders.
        <br /> It returns a mutable object with a .current property
      </p>
      <p>ref count: {ref.current}</p>
      <p>state: {count}</p>
      <button
        onClick={() => {
          ref.current += 1;
        }}
      >
        IncrementRef
      </button>{" "}
      Here the Increment will be happening in the BG. only when you click the
      Increment state button you the UI will be re-rendered and you will see the
      Increment in IncrementRef
      <br />
      <button onClick={() => setCount(count + 1)}>IncrementState</button>
      <div>
        <input ref={inputRef} />
        <button onClick={() => {inputRef.current.focus();
        inputRef.current.value=5}}>SetFocus</button>
      </div>
    </div>
  );
};

export default UseRefHook;
