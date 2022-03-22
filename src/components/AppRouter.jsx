import React, {useContext} from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error'
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';
import { AuthContext } from '../context';
import PostEdit from './edit/PostEdit';

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    console.log(isAuth)
    return (
        isAuth 
        ?
        <Routes>
            <Route exact path="posts" element={<Posts />} />
            <Route exact path="posts/:id" element={<PostIdPage />} />
            <Route exact path="posts/:id/edit" element={<PostEdit />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Error />} />
        </Routes>
        :
        <Routes>
            <Route exact path='login' element={<Login />} />
            <Route path="*" element={<Login />} />
        </Routes>
    )
}

export default AppRouter