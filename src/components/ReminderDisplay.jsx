import React, {use, useState} from 'react'
import Reminder from './Reminder'
import {data} from '../data'

export default function ReminderDisplay() {
  return (
    <section>
        {data.map((date)=>{
            return(
                <Reminder 
                key={date.id}
                {...date}/>
            )
        })}
    </section>
  )
}
