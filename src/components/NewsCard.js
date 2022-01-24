import { Card } from 'react-bootstrap';
import { connect } from 'react-redux'
function NewsCard(props){
    const {dtheme,article}=props
    // console.log(article)
    return(
        <div>
            <Card className={dtheme?'dark newsCard':'newsCard'}>
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Link href={article.url} target="_blank">Link to article</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
      dtheme:state.todoReducer.darkmode
    }
}
export default connect(mapStateToProps)(NewsCard)