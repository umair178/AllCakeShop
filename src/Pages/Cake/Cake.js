import './Cake.scss';
import axios from 'axios';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import {Link, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';



function Cake(){
    const SERVER_URL  = process.env.REACT_APP_SERVER_URL
    const {cakeId} = useParams();
    const [cake, setCake] = useState([]);
    useEffect(()=>{
        axios
        .get(`${SERVER_URL}/${cakeId}`)
        .then(res=>{
            setCake(res.data[0]);
        })
    },[])


    const handleClick = () => {
        axios
            .get(`${SERVER_URL}/cart`)
            .then((res) => {
                if (res.data.length === 0) {
                    axios
                        .get(`${SERVER_URL}/auth/profile`, { withCredentials: true })
                        .then(response => {
                            console.log(response)
                            const user_id = response.data.id;
                            const cake_id = cake.cake_id;
                            const cart_object = {
                                user_id,
                                cake_id
                            }
                            axios
                                .post(`${SERVER_URL}/cart`, cart_object)
                                .then((response) => {
                                    if (response.status === 200) {
                                        window.alert("Added in the cart")
                                    }
                                })
                                .catch(error => {
                                    console.log('error with posting within the cart is: ', error)
                                })
                        })
                        .catch(error => {
                            console.log('error is:', error)
                            if (error.response.status === 401) {
                                window.alert("Please login or sign up to add this item in your cart")
                            }
                        })
                } else {
                    let cakeExists = false;
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].cake_id === cake.cake_id) {
                            cakeExists = true;
                            window.alert("This cake already added in the cart");
                            break;
                        }
                    }
                    if (!cakeExists) {
                        axios
                            .get(`${SERVER_URL}/auth/profile`, { withCredentials: true })
                            .then(response => {
                                const user_id = response.data.id;
                                const cake_id = cake.cake_id;
                                const cart_object = {
                                    user_id,
                                    cake_id
                                }
                                axios
                                    .post(`${SERVER_URL}/cart`, cart_object)
                                    .then((response) => {
                                        if (response.status === 200) {
                                            window.alert("Added in the cart")
                                        }
                                    })
                                    .catch(error => {
                                        console.log('error with posting within the cart is: ', error)
                                    })
                            })
                            .catch(error => {
                                console.log('error is:', error)
                                if (error.response.status === 401) {
                                    window.alert("Please login or sign up to add this item in your cart")
                                }
                            })
                    }
                }
            });
    };
    return(
        <div className='cake'>
            <div className='cake__container1'>
                <div>
                    <Nav></Nav>
                </div>
                <div className='cake__container'>
                    <div>
                        <p className='cake__title'>{cake.occasion} Cake</p>
                        <p className='cake__description'>Peony Dreams - Vanilla bean sponge base with classic italian buttercream with your choice of flavour, finished with fresh peonies, edible gold and pearls.</p>
                    </div>
                    <div className='cake__subcontainer1'>
                        <div className='cake__subcontainer2'>
                            <div>
                                <p className='cake__specs'>Size</p>
                                <p className='cake__specscontent'>{`${cake.size} ${cake.servings}`}</p>
                            </div>
                            <div>
                                <p className='cake__specs'>Style</p>
                                <p className='cake__specscontent'>{`${cake.style}`}</p>
                            </div>
                            <div>
                                <p className='cake__specs'>Price</p>
                                <p className='cake__specscontent'>{`$${cake.price/100}`}</p>
                            </div>
                            <div>
                                <p className='cake__specs'>Order before</p>
                                <p className='cake__specscontent'>Minimum 1 day</p>
                            </div>
                            <div onClick={handleClick}>
                                <button className='cake__button'>Add to Cart</button>
                            </div>
                        </div>
                        <div className='cake__image1'>
                            <img src={cake.image_url} className='cake__image'></img>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
};
export default Cake;