import {useState, useEffect} from 'react'
import shia from '../2c57918def091358224c7a482826f30f-removebg-preview.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import './Clock.css'

function Clock(){
    const [clock, setClock]=useState('')
    const [calendar, setCalendar]=useState('')
    const [showTimer, setShowTimer]=useState(false)
    const [minTimer, setMinTimer]=useState(0)
    const [secTimer, setSecTimer]=useState(0)
    const [timerOn, setTimerOn]=useState(false)
    const [timerSet,setTimerSet]=useState(false)


    useEffect(()=>{
        let interval=setInterval(()=>{
            clearInterval(interval)
            if(timerOn){
                if(secTimer<=0){
                    if(minTimer>0){
                        setMinTimer(minTimer-1)
                        setSecTimer(59)
                    } else if(secTimer<=0&&minTimer<=0){
                        alert('timer is done')
                        setTimerOn(false)
                    }
                } else if(secTimer>0){
                    setSecTimer(secTimer-1)
                } 
                    
                
            }
        },1000)
    },[timerOn,secTimer])

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
    const minSliderHandler=(e)=>{
        console.log(e)
        setMinTimer(e.target.value)
    }
    const secliderHandler=(e)=>{
        console.log(e)
        setSecTimer(e.target.value)
    }
    const timeronHandler=(e)=>{
        setTimerOn(!timerOn)
        setTimerSet(!timerSet)
    }
    return(
        <div  >
            <div className='clockDiv'>
                <div>
                    <img onClick={showtimerhandler} className='shiaImg' src={shia} alt='just do it shia'></img>
                </div>


                {showTimer? 
                <div >
                    Timer
                    <h1 className='clockTime'>{timermindisplay}:{timersecdisplay}</h1>
                    <Button className='donedeletebutton' variant="dark" onClick={()=>setTimerOn(false)} >Stop Timer</Button>
                    <Button className='donedeletebutton' variant="outline-secondary" onClick={()=>setTimerSet(!timerSet)}>Set Timer</Button>


                    {timerSet?
                    <div >
                        <div className='clock_Timer'>
                        <Form.Label className='clock_Timer_min'>Min </Form.Label>
                        <Form.Range  min="0" max="59" value={minTimer} onChange={minSliderHandler}/>
                        </div>
                        <div className='clock_Timer'>
                        <Form.Label className='clock_Timer_sec'>Sec </Form.Label>
                        <Form.Range  min="0" max="59" value={secTimer} onChange={secliderHandler}/>
                        </div>
                        <Button className='donedeletebutton' variant="dark" onClick={timeronHandler} >StartTimer</Button>
                    </div>:''}
                    
                </div>    
                :
                <div>
                <h4 className='clockTime'>{calendar}</h4>
                <h1 className='clockTime'>{clock}</h1>
                </div>
            }
               
            </div>
            
        </div>
    )
}
export default Clock