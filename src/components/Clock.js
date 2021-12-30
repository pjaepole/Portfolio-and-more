import {useState, useEffect} from 'react'
function Clock(){
    const [clock, setClock]=useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setClock(new Date().toLocaleTimeString())
        },1000)
    },[])
    return(
        <div>
            {clock}
        </div>
    )
}
export default Clock