import React from 'react'
import { useState,useEffect } from 'react'
import { Container } from '../components/Container/Container'
import {PostForm} from '../components/post-form/PostForm'
import appwriteService from '../appwrite/config'
import { useParams,useNavigate } from 'react-router-dom'

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() =>{
        if(slug){
            appwriteService.getPost(slug).then((post) => {
                if(post)
                {
                    setPosts(post)
                }
            })
        } else{
            navigate('/')
        }

    },[navigate,slug])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ) : null
}

export default EditPost
