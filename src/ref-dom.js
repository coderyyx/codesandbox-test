import { useRef, forwardRef } from "react";

const DomRef = forwardRef((props, ref) => {
  return <button ref={ref}>{props.children}</button>;
});

// const DomRef = (props) => {
//   return <button>{props.children}</button>;
// };

export default DomRef;
