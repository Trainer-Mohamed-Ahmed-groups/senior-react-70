import "normalize.css/normalize.css"
import './App.scss';
import { useContext } from "react";
import HomePage from "./views/HomePage";
import { ThemeContext } from "./context/ThemeContext";
import Memo from "./views/Memo";
import Reducer from "./views/Reducer";
import CallBack from "./views/CallBack";

function App() {

  const theme = useContext(ThemeContext)

  console.log(theme)
  return (
    <div className={theme.theme === "light" ? "light" : "dark"}>
      {/* <HomePage /> */}
      {/* <Memo /> */}
      {/* <Reducer /> */}
      <CallBack />
    </div>
  );
}

export default App;

