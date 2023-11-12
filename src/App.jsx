import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/navbar/home/Home";

function App() {
  return (
    <>
      <Router>
        <Home />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
