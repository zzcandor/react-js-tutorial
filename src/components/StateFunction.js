import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
  useRef,
  useContext,
  createContext
} from "react";

function StateFunction(params) {
  // useState 相当于类组件 constructor
  const [number, setNumber] = useState(0);
  const [age, setAge] = useState(0);

  // useRef 1 保存一个值，在整个生命周期中维持不变， 重新赋值 ref.current 不会直接触发重新渲染。但其他原因引起页面重新渲染后会拿到新值。
  const ref = useRef(1);

  // 1 useEffect参数1：回调函数。第二个参数为空时，任何state值变化，都会触发一个参数（回调函数）。参数1中返回函数先执行，后执行参数1函数。
  // 2 useEffect 第二参数为非空数组时,只有数组中值变化才会触发回调。第二参数为空数组([])时,只会执行一次
  // 3
  useEffect(() => {
    // console.log("函数组件结束渲染");
    console.log("useEffect-函数本身", new Date());
    ref.current = 2;
    return () => {
      console.log("useEffect-返回函数", new Date());
    };
  }, [number]);

  // useLayoutEffect dom更新之后执行
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    return () => {
      console.log("useLayoutEffect-返回函数", new Date());
    };
  }, [number]);

  // useMemo 相当于vue中computed
  const getDoubleNum = useMemo(() => {
    console.log("useMemo", "获取双倍的num");
    return 2 * number;
  }, [number]);

  // useMemo返回值：值 useCallBack 返回值：函数
  const getDoubelNumberFn = useCallback(() => {
    console.log("getDoubelNumberFn", "获取双倍的num");
    return 2 * number;
  }, [age]);

  // 1 createContext：生成context句柄； useContext 使用context句柄
  // 2 Context.Provider来确定数据共享范围； 通过value 传值
  // 3 子组件通过useContext(context句柄) 获取数据
  const Context = createContext(null);

  return (
    <div
      onClick={() => {
        setNumber(number => number + 1);
      }}
    >
      这是一个函数组件{1}
      <div>getDoubelNumberFn: {getDoubelNumberFn()}</div>
      <div>getDoubleNum: {getDoubleNum}</div>
      <div>age: {age}</div>
      <div>ref current: {ref.current}</div>
      <Context.Provider value={number}>
        <Item1 />
        <Item2 />
      </Context.Provider>
    </div>
  );

  function Item1() {
    const number = useContext(Context);
    console.log(number);
    return <div>子组件1-{number}</div>;
  }
  function Item2() {
    return <div>子组件2</div>;
  }
}

export default StateFunction;
