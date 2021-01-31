import React, { useRef, useEffect } from "react";
function UseRef() {
  // DOM ref。ref 既可以定义DOM ref，也可以定义变量ref。用法和vue3 ref一样
  const btnRef = useRef(null);
  useEffect(() => {
    console.log(btnRef.current);
  }, []);
  return (
    <div>
      <button ref={btnRef}> click: dom ref</button>
    </div>
  );
}
export default UseRef;
