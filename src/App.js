import "normalize.css/normalize.css"
import logo from './logo.svg';
import './App.css';
import First, { Second } from "./components/First";

function App() {
  var courseName = "React course";

  return (
    <div className="App">
      {courseName}
      <First />
      <Second />
      {/* <img src={logo} alt="logo" /> */}
    </div>
  );
}

export default App;
