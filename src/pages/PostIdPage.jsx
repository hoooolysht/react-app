import React from 'react'
import {useParams} from 'react-router-dom'


const PostIdPage = () => {
    const params = useParams()
    console.log(params)
    return(
        <h1>Its page posts ID {params.id}. And its work</h1>
    )
}

export default PostIdPage