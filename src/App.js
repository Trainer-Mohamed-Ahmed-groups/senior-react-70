import "normalize.css/normalize.css"
import './App.scss';
import Button from 'react-bootstrap/Button';
import Home from "./views/Home";
import SiteNav from "./layout/SiteNav";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import Error from "./views/Error";

function App() {

  return (
    <div className="App">
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
