import { Link } from 'react-router-dom';
import './Nav.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Nav(){
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const [profileData, setProfileData] = useState(null);
    useEffect(()=>{
        axios
        .get(`${process.env.REACT_APP_SERVER_URL}/auth/profile`, {withCredentials: true})
        .then((res)=>{
            setIsLoggedIn(true)
            setProfileData(res.data)
            console.log('profile data is :', res)
        })
        .catch((err)=>{
            if(err.response.status===401){
                setIsLoggedIn(false);
            } else {
                console.log('Authentication Error is:', err)
                
            }
        })
    },[]);
    return(
        <div>
            <div className='nav__container'>
                <div className='nav__login'>
                    {isLoggedIn ?
                        (
                            <div className="nav__dropdown">
                                <button className="nav__dropbtn">Welcome {profileData.username}</button>
                                <div className="nav__dropdown-content">
                                    {/* <Link to="#" className='nav__dropdown-list'>View Orders</Link> */}
                                    <Link to={`${process.env.REACT_APP_SERVER_URL}/auth/logout`} className='nav__dropdown-list'>Logout</Link>
                                    
                                </div>
                            </div>
                        ) : (
                            <Link className='nav__login-button' to={`${process.env.REACT_APP_SERVER_URL}/auth/google`}>Login</Link>
                        )}
                </div>
                <p className='nav__header'>All Cake Shop</p>
                <div className='nav__subcontainer'>
                    <Link to='/' className='nav__subheader'>Home</Link>
                    <Link to='/cart' className='nav__subheader nav__subheader--padding'>Cart</Link>
                    <Link to='/aboutus' className='nav__subheader'>About Us</Link>
                </div>
            </div>
        </div>
    )
};
export default Nav;