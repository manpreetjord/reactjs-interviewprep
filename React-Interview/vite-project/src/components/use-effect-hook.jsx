import { useEffect, useLayoutEffect, useState } from "react";

const UseEffectHook = () => {

    const [user,setUser]=useState({})
     const fetchUser=async ()=>{
        const response=await fetch("https://random-data-api.com/api/v2/users")
        const data=await response.json()
        setUser(data)

        console.log(data);
    }
    useEffect(()=>{
        fetchUser()
    },[])

    // const [seconds,setSeconds]=useState(0);
//USEEFFECT
//     useEffect(()=>{
//         const interval=setInterval(()=>{
// setSeconds((prevSeconds)=>prevSeconds+1)
//         },1000)

//         return ()=>{
//             clearInterval(interval)
//             console.log("Interval Cleared");
//         }
//     },[])
 
    //USELAYOUTEFFECT

    useEffect(() => {
        console.log("USEEFFECT")
      
        }, [])
    useLayoutEffect(() => {
      console.log("USELAYOUTEFFECT")
    
      }, [])
  return (
    <div>
      <h3>UseEffectHook</h3>
      <h4>Q1.What is useEffectHook used for in React?</h4>
      <p>useEffect is a hook used in functional components to perform side effects after rendering, such as data fetching, subscriptions, or Manual DOM Manipulation </p>
      {/* useEffect(()=>{
        //sideeffects goes here

        return()=>{
            //Cleanup code (optional)
            //Runs on component unmount or before re-runs
        }
    },[
        //dependencies goes here
    ]) */}

    <h4>Q2. Why is dependency array used in useEfffect?</h4>
    <p>- When it is empty , it runs only once
        - When these values inside it change the effect is re-run.
        -When there is no dependency the effect is run each time the UI is re-rendered
    </p>

    <p>WHY IS IT NECESSARY?<br/>
        <span>handling dependencies ensures that the effect is run only when it is neccesary and prevents unneccesary re-exectuion of the effect,optimizing the performace and avoiding potential bugs</span></p>

        {user.first_name} {user.last_name}

      <h4>Q3. How to perform a cleanup function in useEffect? Explain with example.</h4>
      <p>Ans. You can run a cleanup function inside the useeffect, which runs before the effect re-runs or when the component unmounts. <br />This is useful for cleaning up subscriptions or event listeners

      </p>
    </div>
  );
};

export default UseEffectHook;
