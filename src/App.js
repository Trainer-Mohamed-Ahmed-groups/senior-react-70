import "normalize.css/normalize.css"
import './App.css';
import Course from "./components/Course";
import Conditional from "./components/Conditional";

function App() {

  return (
    <div className="App">
      <Course courseName="HTML" description="Hyper">I am a child of course</Course>
      <Course courseName="CSS" description="Cascading" />
      <Course courseName="JS" description="Programming" />
      <Course courseName="React" description="SPA" />
      <hr />
      <Conditional />
    </div>
  );
}

export default App;
