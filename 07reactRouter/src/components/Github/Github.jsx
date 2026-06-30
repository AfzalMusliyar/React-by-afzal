import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => { 
    //     fetch('https://api.github.com/users/mojombo')
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])
    return (
        <div className='text-center m-4 bg-blue-500 text-black'>Github Followers: {data.followers}
            <img src={data.avatar_url} alt="git picture" width={400} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/mojombo')
    return response.json()
}