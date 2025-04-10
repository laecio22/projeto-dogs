import { useContext, useEffect, useRef, useState } from "react"
import PhotoCommentForm from "../PhotoCommentForm/PhotoCommentForm"
import {UserContext} from '../../../contexts/UserContext';
import { ListComments } from "./style";

const PhotoComments = (props) => {
  const [comments, setComments] =  useState(() => props.comments)
  const{login} = useContext(UserContext)  
  const commentsSection =  useRef(null) 

  useEffect(()=> {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  },[comments])

 return (
    <>
    <ListComments ref={commentsSection} className={`${props.single? 'single' : ''}`}>
      {comments.map(comment => <li key={comment.comment_ID}>
        <b>{comment.comment_author} :</b>
        <span>{comment.comment_content}</span>
      </li>)}
    </ListComments>
    {login &&    <PhotoCommentForm id={props.id} setComments={setComments} single={props.single}/>}
  
    </>
  )
}

export default PhotoComments