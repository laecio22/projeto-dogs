import { useContext, useState } from "react"
import PhotoCommentForm from "../PhotoCommentForm/PhotoCommentForm"
import {UserContext} from '../../../contexts/UserContext';

const PhotoComments = (props) => {
  const [comments, setComments] =  useState(() => props.comments)
  const{login} = useContext(UserContext)  
  console.log(comments, 'comentários')

 return (
    <>
    <ul>
      {comments.map(comment => <li key={comment.comment_ID}>
        <b>{comment.comment_author}</b>
        <span>{comment.comment_content}</span>
      </li>)}
    </ul>
    {login &&    <PhotoCommentForm id={props.id} setComments={setComments}/>}
  
    </>
  )
}

export default PhotoComments