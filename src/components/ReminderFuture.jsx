import React, {use, useState} from 'react'

export default function ReminderFuture(objs) {
  console.log(objs)
  objs= Object.entries(objs)
  console.log(objs)
  return (
    <>
      {objs.map(x=>{
        return(<div key={x.id}>
          <div>
            <h2>{x.name}</h2>
            <h3>{x.birthday}</h3>
          </div>
          <img src={x.image} alt={x.name} />
        </div>)
      })}
      
    </>
    
  )
}
