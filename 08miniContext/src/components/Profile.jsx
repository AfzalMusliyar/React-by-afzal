import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if(!user) return <div>Please LOGIN</div>
    else
    {
        return <div>WELCOME {user.username}</div>
    }
}

export default Profile
