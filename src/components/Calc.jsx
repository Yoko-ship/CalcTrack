import React, { useContext, useEffect, useState } from "react";
import "./css/calc.css";
import Grids from "./Grids";
import historyImage from "../assets/history.png";
import Modal from "./Modal";
import "./css/modal.css";
import { calcuation } from "./Calculate";

export const inputValues = React.createContext();
function Calc() {
  const [inputValue, setInputValue] = useState("");
  const [inputPrev, setInputValuePrev] = useState("");
  const [inputHistory, setInputHistory] = useState([]);

  const [show, setShow] = useState(false);
  const buttonHandler = (value) => {
    setInputValue((prevElement) => prevElement + value);
  };

  const equalTo = () => {
    calcuation(
      inputValue,
      inputHistory,
      setInputValuePrev,
      setInputValue,
      setInputHistory
    );
  };

  const delButton = () => {
    setInputValue(inputValue.slice(0, -1));
    setInputValuePrev("");
  };
  const clearButton = () => {
    setInputValue("");
    setInputValuePrev("");
  };

  const showHistory = () => {
    setShow(!show);
  };

  return (
    <>
      <div
        className="container"
        style={{ filter: show ? "brightness(50%)" : "brightness(100%)" }}
      >
        <section>
          <div className="btn-div">
            <button onClick={showHistory}>
              <img src={historyImage}></img>
            </button>
          </div>
          <div className="display">
            {inputPrev ? (
              <span className="history">{inputPrev}=</span>
            ) : (
              <span></span>
            )}
            <p>{inputValue}</p>
          </div>
        </section>
        <section>
          <div className="grids">
            <Grids
              func={(e) => buttonHandler(e.target.value)}
              equal={equalTo}
              DEL={delButton}
              CLEAR={clearButton}
            />
          </div>
        </section>
      </div>
      <div>
        <inputValues.Provider value={inputHistory}>
          {show ? <Modal /> : <p></p>}
        </inputValues.Provider>
      </div>
    </>
  );
}

export default Calc;
