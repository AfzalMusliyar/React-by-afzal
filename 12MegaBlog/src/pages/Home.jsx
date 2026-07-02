import React,{ useState,useEffect } from 'react'
import { Container } from '../components/Container/Container'
import {PostCard} from '../components/PostCard'
import appwriteService from '../appwrite/config'

function Home() {
    
    const [post, setPosts] = useState(null)
    useEffect(() =>{

        appwriteService.getPosts().then((posts) => {
            if(posts)
            {
                setPosts(posts.documents)
            }
        })

    },[])
    
    if(posts.length === 0){
        return (
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        )
    }
}

export default Home
