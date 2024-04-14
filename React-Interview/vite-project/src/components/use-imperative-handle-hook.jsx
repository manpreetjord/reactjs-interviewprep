import React, { forwardRef, useImperativeHandle, useRef } from "react";

const UseImperativeHandleHook = () => {
  const childRef = useRef(null);
  return (
    <>
      <div>UseImperativeHandleHook</div>
      <h5>
        How do you call a function of child component from the parent component?
      </h5>

      <button onClick={()=>childRef.current.focusInput()}>Focus on Input</button>
      <ChildComponent ref={childRef} />
    </>
  );
};

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      focusInput,
    };
  });
  return <input type="text" ref={inputRef} />;
});
export default UseImperativeHandleHook;
