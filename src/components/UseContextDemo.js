import React, { useContext } from "react";

const Themes = {
  light: {
    foreground: "#000",
    background: "#eee"
  },
  dark: {
    foreground: "#fff",
    background: "#222"
  }
};
// 创建Context.context 相当于vue 里面provide
const ThemeContext = React.createContext(Themes.light);
function ThemeButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      hello world
    </button>
  );
}

function ToolBar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

function App() {
  return (
    <ThemeContext.Provider value={Themes.dark}>
      <ToolBar />
    </ThemeContext.Provider>
  );
}
export default App;
