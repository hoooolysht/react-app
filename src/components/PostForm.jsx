import React, { useState } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput';


const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})


    const addNewPost = (e) => {
        e.preventDefault()
        // const newPost = {
        //   id: Date.now(),
        //   title,
        //   body,
        // }
        // console.log(newPost)
        // setPosts([...posts, {...post, id: Date.now()}])// создание нового поста
        const newPost = {
            ...post, id: Date.now(),

        }
        create(newPost)
        // setTitle('') //обнуление строк ввода
        // setBody('') 
        setPost({title: '', body: ''})
      }

    // const onChangeHandler = e => {
    //     setFormData({title: e.target.value})
    // }

    return (

        <form>
            {/* Управляемые компоненты */}
            <MyInput 
            value={post.title} 
            onChange={e => setPost({...post, title: e.target.value})} 
            type="text" 
            placeholder="Post name" />
            <MyInput 
            value={post.body} 
            onChange={e => setPost({...post, body: e.target.value})}  
            type="text" 
            placeholder="Post name" />
            {/* Неуправляемый компонент/неконтролируемый */}
            {/* <MyInput 
            ref = {bodyInputRef}
            type = "text" 
            placeholder = "description" /> */}
            <MyButton onClick = {addNewPost}>create</MyButton>
        </form>
    )
}

export default PostForm