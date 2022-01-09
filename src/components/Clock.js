import {useState, useEffect} from 'react'
import shia from '../2c57918def091358224c7a482826f30f-removebg-preview.png'
import 'bootstrap/dist/css/bootstrap.min.css';
function Clock(){
    const [clock, setClock]=useState('')
    const [calendar, setCalendar]=useState('')
    const [showTimer, setShowTimer]=useState(false)
    const [minTimer, setMinTimer]=useState(1)
    const [secTimer, setSecTimer]=useState(9)

    useEffect(()=>{

    },[secTimer])
    const timermindisplay= minTimer<10? `0${minTimer}`: minTimer
    const timersecdisplay= secTimer<10? `0${secTimer}`: secTimer
    useEffect(()=>{
        setInterval(()=>{
            setClock(new Date().toLocaleTimeString())
        },1000)
    },[])
   
   
    useEffect(()=>{
        setCalendar(new Date().toLocaleDateString())
    },[])

    const showtimerhandler=(e)=>{
        setShowTimer(!showTimer)
    }
    return(
        <div  >
            <div className='clockDiv'>
                <div>
                    <img onClick={showtimerhandler} className='shiaImg' src={shia} alt='just do it shia'></img>
                </div>


                {showTimer? 
                <div>
                    Timer
                    <h1 className='clockTime'>{timermindisplay}:{timersecdisplay}</h1>
                </div>    
                :
                <div>
                <h4 className='clockTime'>{calendar}</h4>
                <h1 className='clockTime'>{clock}</h1>
                </div>
            }
                {/* <div>
                <h4 className='clockTime'>{calendar}</h4>
                <h1 className='clockTime'>{clock}</h1>
                </div> */}
            </div>
            
        </div>
    )
}
export default Clock