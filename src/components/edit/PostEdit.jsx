import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput';


const PostEdit = ({edit}, props) => {
    const [post, setPost] = useState({title: '', body: ''})


    const addAdjustedPost = (e) => {
        e.preventDefault()
        const editPost = {
            ...post
        }
        edit(editPost)
        setPost({title: '', body: ''})
      }

      const navigate = useNavigate()

      const cancelEdit = () => {
          navigate('/posts')
      }

    return (

        <form>
            <div>
                <strong>Edit {props.number}</strong>
            </div>
            <MyInput 
            value={post.title} 
            onChange={e => setPost({...post, title: e.target.value})} 
            type="text" 
            placeholder="Name" />
            <MyInput 
            value={post.body} 
            onChange={e => setPost({...post, body: e.target.value})}  
            type="text" 
            placeholder="Number" />
            <MyButton onClick = {addAdjustedPost}>submit</MyButton>
            <MyButton onClick = {cancelEdit}>cancel</MyButton>
        </form>
    )
}

export default PostEdit