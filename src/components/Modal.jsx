import React, { useContext, useEffect, useState} from "react";
import { createPortal } from "react-dom";
import { inputValues } from "./Calc";
import trashImage from "../assets/trash.png"



function Modal() {
  var inputHistory = useContext(inputValues)
  const [showHistory,setShowHistory] = useState([])
  const modalElement = document.getElementById("modal");

  
  const deleteHistory = () =>{
    setShowHistory([])
  }

  useEffect(() =>{
    setShowHistory(inputHistory)
  },[inputHistory])

  return createPortal(
    
      <div className="modal-active">
        {showHistory.map((item,index) =>{
          return <p key={index}>{item}</p>
        })}
          <button onClick={deleteHistory}><img src={trashImage}></img></button>
      </div>,
    modalElement
  );
}

export default Modal;
