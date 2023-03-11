import { Link } from 'react-router-dom';
import './Nav.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Nav(){
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const [profileData, setProfileData] = useState(null);
    useEffect(()=>{
        axios
        .get('http://localhost:8080/auth/profile', {withCredentials: true})
        .then((res)=>{
            setIsLoggedIn(true)
            setProfileData(res.data)
            console.log(res)
        })
        .catch((err)=>{
            if(err.response.status===401){
                setIsLoggedIn(false);
            } else {
                console.log('Authentication Error is:', err)
                
            }
        })
    });
    return(
        <div>
            <div className='nav__container'>
                <p className='nav__header'>All Cake Shop</p>
                <div className='nav__subcontainer'>
                    <Link to='/' className='nav__subheader'>Home</Link>
                    <Link to='/' className='nav__subheader nav__subheader--padding'>Shop</Link>
                    <Link to='/' className='nav__subheader'>About Us</Link>
                    {isLoggedIn? (<p>Welcome</p>):(<a href='http://localhost:8080/auth/github'>Log In</a>)}
                </div>

            </div>
        </div>
    )
};
export default Nav;