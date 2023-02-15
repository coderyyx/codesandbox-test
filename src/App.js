import "./styles.css";
import React, { useRef, forwardRef, useState } from "react";
import DomRef from "./ref-dom";
import LogPropsButton from "./log-hoc";
import ClassDomRef from "./class-dom-ref";

// const LogPropsButton = logProps(DomRef);

export default function App() {
  const $ref = useRef();
  const [count, setCount] = useState(0);

  const handleClick = () => console.log($ref.current);
  // const handleClick = () => $ref.current.focus();

  return (
    <div className="App">
      <h1 onClick={() => setCount((prev) => prev + 1)}>title{count}</h1>
      <h1 onClick={handleClick}>Hello CodeSandbox</h1>
      {/* <DomRef ref={$ref}>button</DomRef>
      <LogPropsButton count={count} ref={$ref}>
        test1
      </LogPropsButton> */}
      <ClassDomRef test={$ref} />
    </div>
  );
}
