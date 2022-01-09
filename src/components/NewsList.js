import {useEffect,useState} from 'react'
import NewsCard from './NewsCard'

function NewsList(){
    const [news,setNews]=useState([])
    useEffect(()=>{
        // fetch('http://api.mediastack.com/v1/news?access_key=18363cd20c11c635314dadbcbc1da3fc&languages=en'
        // )
        // .then(response => response.json())
        // .then(data => setNews(data.data));
    },[])
    // console.log('this is from footer',news)
    return(
        <div className='newsList'>
            {news.slice(0,5).map((article)=>(<NewsCard key={article.title} article={article}/>))}
        </div>
    )
}

export default NewsList
