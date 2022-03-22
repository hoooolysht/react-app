import React, { useState } from 'react'
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom'

const PostItem = (props) => {
    const navigate = useNavigate()

    const goPosts = () => {
        navigate(`/posts/${props.post.id}`)
    }
    const editItPost = () => {
        navigate(`/posts/${props.post.id}/edit`)
    }
   


   

    return (
        <div>
            <div className="post">
      
                <div className="post__content">
                    <strong>{props.number}. {props.post.title}</strong>
                    <div>
                    {props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <MyButton onClick={goPosts}>open</MyButton>
                    <MyButton onClick={editItPost}>edit</MyButton>
                    <MyButton onClick={() => props.remove(props.post)}>delete</MyButton>
                </div>

            </div>
        </div>
    )
}

export default PostItem;