import{ useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
 

 
  const handleIncrement = () => {
    setCount((prev) => prev + 3); //The set function is async in nature so after all the functions are called the output is given
    setCount(count + 3);
    setCount(count + 3);
    setCount(count + 3);
  };

  return (
    <div>
      <h3>1. useState Hook</h3>
      <p>
        useState is a Hook that allows functional components to manage their
        state by declaring a State variable and providing a function to update
        them.{" "}
      </p>
      <span>Count: {count}</span>
      {/* <button onClick={()=>setCount(count+1)}>Increment</button> */}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      <h5>Q2: What is the output?</h5>
      <button onClick={handleIncrement}>Increment by 3</button>

      <h5>
        Q3: What is two way data binding and How can we achieve it in react?
      </h5>
      {/*It is a concept that allows the synchronization of data betwwen the model(state) and the view in both directions.
        You can achieve it by combining the state managament with controlled components */}

      <p>Input Value: {value}</p>
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>

     
    </div>
  );
};

export default UseStateHook;
