import React, {useState, useEffect} from "react";
import './ClockFunctional.css';


const ClockFunctional = (props)=> {

    const [date, setDate] = useState(new Date());

    const tick = ()=> setDate(new Date());

    useEffect(()=> {
        let timerId = setInterval(()=> {tick()}, 1000)

        console.log(`Mounting and Updation lifeCycle: componentDidMount and component DidUpdate`);
        return(()=>{
            clearInterval(timerId)
            console.log(`Unmounting lifeCycle: componentWillUnmount`);
        })
    }, [date]);
 return(
    <div className="clock">
                <h4>Time: 
                    {date.toLocaleTimeString()}
                <span onClick = {props.toggleClockMethod}>x</span>
                </h4>
            </div>
 );
    
}

export default ClockFunctional;