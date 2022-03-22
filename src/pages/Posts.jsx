import React, { useState } from 'react'
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import '../styles/App.css';
import { usePosts } from '../components//hooks/usePosts'
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';

function Posts() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description'}, 
    {id: 2, title: 'Python', body: 'Description'},
    {id: 3, title: 'Dart', body: 'Description'},
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)

  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }


const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}


  
  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Create a new user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create = {createPost} />
      </MyModal>
      
      <hr style={{margin: '15px 0'}} />
      <PostFilter filter = {filter} setFilter={setFilter} />
      <PostList remove = {removePost} posts = {sortedAndSearchedPost} title = {'list 1'} />

    </div>
  );
}

export default Posts