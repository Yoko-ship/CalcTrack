import React, { useState } from 'react'
import "./css/time.css"

function Time() {
    const [hours,setHours] = useState(Number)
    const [minutes,setMinutes] = useState(Number)
    const [seconds,setSeconds] = useState(Number)

    const buttonHandler = () =>{
        if(hours || minutes){
            const convertHours = hours * 3600
            const convertMinutes = minutes * 60
            const result = convertHours + convertMinutes
            setSeconds(result)
        }
    }
  return (
    <div className='converting'>
        <label>Часы: </label>
        <input type='number' onChange={(e) => setHours(e.target.value)} value={hours}/>
        <label>Минуты</label>
        <input type='number' onChange={(e) => setMinutes(e.target.value)} value={minutes}/>
        <button onClick={buttonHandler}>Подтвердить</button>

        {seconds?(
            <p>{seconds}</p>
        ):(
            <p></p>
        )}
    </div>
    
  )
}

export default Time