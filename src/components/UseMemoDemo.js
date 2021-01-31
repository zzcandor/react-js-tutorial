import React, { useState, memo, useMemo } from "react";

// 子组件
// function Child({ userInfo }) {
//   console.log("Child render...", userInfo);
//   return (
//     <div>
//       <p>
//         This is Child {userInfo.name} {userInfo.age}
//       </p>
//     </div>
//   );
// }

// 类似于Class 组件PureComponent, 对props 进行浅层对比
// useMemo返回值：值 useCallBack 返回值：函数
const Child = memo(({ userInfo }) => {
  console.log("Child render", userInfo);
  return (
    <div>
      <p>
        This is Child {userInfo.name} {userInfo.age}
      </p>
    </div>
  );
});

// 父组件
function App() {
  console.log("Parent render");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("小牛");

  // const userInfo = {
  //   name,
  //   age: 20
  // };
  const userInfo = useMemo(() => {
    return { name, age: 21 };
  }, [name]);

  return (
    <div>
      <p>
        useMemo demo:count is {count}
        <button onClick={() => setCount(count + 1)}>click</button>
      </p>
      <Child userInfo={userInfo} />
    </div>
  );
}
export default App;
