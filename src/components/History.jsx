import React from 'react'

function History(props) {
  return (
    <section>
    <div className="btn-div">
      <button onClick={props.showHistory}>
        <img src={props.historyImage}></img>
      </button>
    </div>
    <div className="display">
      {props.inputPrev ? (
        <span className="history">{props.span}=</span>
      ) : (
        <span></span>
      )}
      <p>{props.inputValue}</p>
    </div>
  </section>
  )
}

export default History