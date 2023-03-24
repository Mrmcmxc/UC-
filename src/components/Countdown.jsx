import { useEffect, useState } from "react"


const Countdown = ({timestamp}) => {
// subtraction to determine the total time left over
    const[timeLeft, setTimeLeft] = useState(timestamp - Date.now())
    useEffect(() => {
// for every one second update the time left
        const interval = setInterval(() => { 
            setTimeLeft(timestamp - Date.now())
        }, 1000)

        return() => clearInterval(interval)
    }, [timestamp])

// Time left over in days
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
// Time left in hours by / days
    const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),)
// time left over in minutes
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60))
// time left over in seconds
    const seconds = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / 1000)


    return Date.now() > timestamp ? '00:00:00' : (
    <div>
        {days}d : {hours}h : {minutes}m : {seconds}s 
    </div>
    )
  
}

export default Countdown