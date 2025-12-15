
import ReminderToday from './ReminderToday'
import ReminderMonth from './ReminderMonth'
import ReminderFuture from './ReminderFuture'
import { data } from '../data'
export default function ReminderDisplay() {

  const fixedDates = data.map(x=>{
     const birth = new Date(x.birthday)
     const month = birth.getUTCMonth()+1
     const day = birth.getUTCDate()
     x.birthday = `${month}/${day}`
    return x
  })

  const todayDates = fixedDates.filter(x=>{
    let date1 = new Date()
    const month = date1.getMonth()+1
    const day = date1.getUTCDate()
    date1 = `${month}/${day}`
    if(date1 === x.birthday){
      return x
    }
    return ""
  })
  const monthDates = fixedDates.filter(x=>{
    let date1 = new Date()
    let xSplit = x.birthday.split("/")
    const month = date1.getMonth()+1
    const day = date1.getUTCDate()
    date1 = `${month}`
    if(date1 === xSplit[0] && day < Number(xSplit[1])){
      return x
    }
    return ""
  })
  const futureDates = fixedDates.filter(x=>{
    let date1 = new Date()
    let xSplit = x.birthday.split("/")
    const month = date1.getMonth()+1
    const day = date1.getUTCDate()
    date1 = `${month}`
    if(date1 !== xSplit[0]){
      return x
    }else if(date1 === xSplit[0] && day > Number(xSplit[1])){

    }
    return ""
  })

  return (
    <>
    <h2>Birthdays Today</h2>
    <ReminderToday objs = {todayDates} class="display"/>
    <h2>Birthdays This Month</h2>
    <ReminderMonth objs = {monthDates} className="display"/>
    <h2>Birthdays Later This Year</h2>
    <ReminderFuture objs = {futureDates} className="display"/>
    
    </>
  )
}
