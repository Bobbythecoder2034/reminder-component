export const timer = (deadline) => { //Meant to be a representation of time till a future date
    const end = new Date(deadline)
    const countdown = setInterval(function(){
        var today = new Date()
        let difference = end.getTime() - today.getTime()
        console.log(difference/1000)
    },1000)
}
