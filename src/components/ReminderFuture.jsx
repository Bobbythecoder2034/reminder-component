'use client'
export default function ReminderFuture(objs) {

  return (
    <div className='display'>
      {objs.objs.map(x=>{
        return(<div key={x.id}  className='name-holder future'>
          <div>
            <h2>{x.name}</h2>
            <h3>{x.birthday}</h3>
          </div>
          <img src={x.image} alt={x.name} />
        </div>)
      })}
      
    </div>
    
  )
}
