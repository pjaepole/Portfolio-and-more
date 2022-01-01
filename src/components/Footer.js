import {useEffect,useState} from 'react'
function Footer(){
    const [news,setNews]=useState([])
    useEffect(()=>{
        fetch('http://api.mediastack.com/v1/news?access_key=18363cd20c11c635314dadbcbc1da3fc&languages=en'
        )
  .then(response => response.json())
  .then(data => console.log(data));
    },[])
    return(
        <div className='footer'>
            
        </div>
    )
}

export default Footer