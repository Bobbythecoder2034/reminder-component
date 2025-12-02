import React, {use, useState} from 'react'
import Timer from './Timer'
export default function Reminder(id, birthday, name, image) {
    const calculate = () =>{
        <h1>hi</h1>
    }
    calculate()
  return (
    <div>
        <Timer key = {id*12} date = {birthday}/>
    </div>
  )
}
