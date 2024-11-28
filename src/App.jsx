import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Calc from "./components/Calc";
import Time from "./components/Time";

function App() {
  return (
    <>
      <Router>
        <header>
          Калькулятор
          <nav>
            <ul>
              <li>
                <Link to="/">Калькулятор</Link>
              </li>
              <li>
                <Link to="/time">Секунды</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Calc/>}></Route>
          <Route path="/time" element={<Time/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
