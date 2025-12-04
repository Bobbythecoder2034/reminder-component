import React, {use, useState} from 'react'
import ReminderToday from './ReminderToday'
import ReminderMonth from './ReminderMonth'
import ReminderFuture from './ReminderFuture'
import { data } from '../data'
export default function ReminderDisplay() {

  const fixedDates = data.map(x=>{
     const birth = new Date(x.birthday)
     const month = birth.getMonth()
     const day = birth.getDay()
    return `${month}/${day}`
  })
  console.log(fixedDates)
  const todayDates = fixedDates.filter(x=>{
    let date1 = new Date()
    const month = date1.getMonth()
    const day = date1.getDay()
    date1 = `${month}/${day}`
    if(date1 === x){
      return x
    }
  })


  return (
    <>
    <h2>Birthdays Today</h2>
    <ReminderToday />
    <h2>Birthdays This Month</h2>
    <ReminderMonth />
    <h2>Birthdays Later This Year</h2>
    <ReminderFuture />
    
    </>
  )
}
