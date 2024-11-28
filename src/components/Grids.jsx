import React, { useState } from "react";

function Grids(props) {

  return (
    <>
      <div className="grid">
        <button className="number" onClick={props.func} value={1}>1</button>
      </div>
      <div className="grid">
        <button className="number" value={2} onClick={props.func}>2</button>
      </div>
      <div className="grid">
        <button className="number" value={3} onClick={props.func}>3</button>
      </div>
      <div className="grid">
        <button className="number" value={4} onClick={props.func}>4</button>
      </div>
      <div className="grid">
        <button className="number" value={5} onClick={props.func}>5</button>
      </div>
      <div className="grid">
        <button className="number" value={6} onClick={props.func}>6</button>
      </div>
      <div className="grid">
        <button className="number" value={7} onClick={props.func}>7</button>
      </div>
      <div className="grid">
        <button className="number" value={8} onClick={props.func}>8</button>
      </div>
      <div className="grid">
        <button className="number" value={9} onClick={props.func}>9</button>
      </div>
      <div className="grid">
        <button className="number" value={0} onClick={props.func}>0</button>
      </div>
      <div className="grid">
        <button value={"+"}  onClick={props.func}>+</button>
      </div>
      <div className="grid">
        <button value={"-"}  onClick={props.func}>-</button>
      </div>
      <div className="grid">
        <button value={"*"} onClick={props.func}>*</button>
      </div>
      <div className="grid">
        <button value={"/"}  onClick={props.func}>/</button>
      </div>
      <div className="grid">
        <button style={{backgroundColor:"#8AB4F8"}} onClick={props.equal}>=</button>
      </div>
      <div className="grid">
        <button value={"."} onClick={props.func}>.</button>
      </div>
      <div className="grid">
        <button className="dangerous" value={"DEL"} onClick={props.DEL}>DEL</button>
      </div>
      <div className="grid">
        <button className="dangerous" value={"CLEAR"} onClick={props.CLEAR}>CLEAR</button>
      </div>
      
    </>
  );
}

export default Grids;
