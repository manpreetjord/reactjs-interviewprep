import  { useCallback, useMemo, useState } from 'react'

const UseMemoAndCallBack = () => {

    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(99);

    const Square=useMemo(()=>{
        console.log("expensive calculation");
        return count*count;
     
    },[count])

    // const squarevalueMemo= useMemo(Square,[count]);
    const squarevalueCallback= useCallback(Square,[]);

  return (
    <>
    <h4>Q. UseMemo and useCallback Hook</h4><br />
    <h5>What is useMemo in React?</h5>
    <p>It is a hook used to memoize the result of a function and cache it, recalulating it only if the dependencies change.</p>

    <p>useMemo memoizes a computed value and returns the cached value without causing re-renders,<br></br>while useState manages state and triggers re-renders when the state changes.</p><br />
    Example: <br />
   Square count: {squarevalueCallback()} <br/>
    DecrementCounter: {count2}<br/>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <button onClick={()=>{setCount2(count2-1)}}>Decrement</button>

    <br />
    <br />
    <h5>What is useCallback in React?</h5>
    <p>It is a hook used to memoize a provided callback function and return a memoized version of the function</p>
    </>
  )
}

export default UseMemoAndCallBack