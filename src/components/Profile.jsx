import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [user,setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("user"));
        if(user && user.token){
            setUser(user)
        }
        else{
            navigate("/")
        }
    },[])

    function handleLogout(){
        localStorage.removeItem("user");
        setUser(null);
        navigate("/")
    }
  return (
    <div className='profile_box'>
        <h1>Profile</h1>
        <p>Full Name: <span>{user?.full_name}</span></p>
        <p>Email: <span>{user?.email}</span></p>
        <p>Password: <span>{user?.password}</span></p>
        <button onClick={()=>handleLogout()}>Logout</button>
    </div>
  )
}

export default Profile