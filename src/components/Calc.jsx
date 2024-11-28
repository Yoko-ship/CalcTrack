import React, { useContext, useEffect, useState } from "react";
import "./css/calc.css";
import Grids from "./Grids";
import historyImage from "../assets/history.png";
import Modal from "./Modal";
import "./css/modal.css";
import { calcuation } from "./Calculate";
import Grid from "./Grid";
import History from "./History";
import Div from "./Div";

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
      <Div show={show}>
        <History
          showHistory={showHistory}
          historyImage={historyImage}
          inputPrev={inputPrev}
          span={inputPrev}
          inputValue={inputValue}
        />
        <section>
          <Grid>
            <Grids
              func={(e) => buttonHandler(e.target.value)}
              equal={equalTo}
              DEL={delButton}
              CLEAR={clearButton}
            />
          </Grid>
        </section>
      </Div>
      <div>
        <inputValues.Provider value={inputHistory}>
          {show ? <Modal /> : <p></p>}
        </inputValues.Provider>
      </div>
    </>
  );
}

export default Calc;
