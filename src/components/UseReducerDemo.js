import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// useReducer 是 useState 的代替方案，用于state复杂变化
// useReducer 是个单个组件状态管理，组件通讯还需要pros
// redux 是全局的状态管理，多组件共享数据
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      count:{state.count}
      <button onClick={() => dispatch({ type: "increment" })}>
        increament
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
}

export default App;
