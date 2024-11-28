import React from 'react'

function Div({show,children}) {
  return (
    <div className="container" style={{ filter: show ? "brightness(50%)" : "brightness(100%)" }} >{children}</div>
  )
}

export default Div