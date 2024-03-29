import React, { useEffect, useRef, useState } from 'react';
import './Cart.scss';
import axios from 'axios';
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom';

function Cart() {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const [cakeInCart, setCakeInCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantity, setQuantity] = useState({quantity: 1});

    useEffect(() => {
        axios
            .get(`${SERVER_URL}/auth/profile`, { withCredentials: true })
            .then(response => {
                if (response.status===200) {
                    const user_id = response.data.id
                    const user_obj={user_id}
                    axios
                        // .post(`${SERVER_URL}/getuserid`,user_obj)
                        // .then(res=>{
                            
                        // })
                        .get(`${SERVER_URL}/cart`)
                        .then(response => {
                            for (let i = 0; i < response.data.length; i++) {
                                response.data[i] = { ...response.data[i], ...quantity }
                            }
                            setCakeInCart(response.data)
                                
                            .then(res => {
                                let price = 0
                                for (let i = 0; i < res.data.length; i++) {
                                    price += res.data[i].price * res.data[i].quantity
                                }
                                setTotalPrice(price);
                            })
                        })
                        
                        .catch(error => {
                            console.log('error fetching the cart is:', error)
                        });
                }else{
                    window.alert("Login to continue")
                }
            })
    }, [SERVER_URL]);
    const handleclick = () => {
        if (cakeInCart.length === 0) {
            window.alert("Your cart is empty. Please add cakes to your cart")
        } else {
            // const items = {
            //     items: [
            //         { id: 1, quantity: 3 },
            //         { id: 2, quantity: 1 }
            //     ]
            // }
            const items = {
                items: cakeInCart.map((cake) => ({ id: cake.cake_id, quantity: cake.quantity})),
            };
            console.log(items)
            axios.post(`${SERVER_URL}/create-checkout-session`, items)
                .then(res => {
                    window.location = res.data.url
                })
                .catch(e => {
                    console.log('error is:', e)
                })
        }
    };

    const updateQuantity = (e, cake) => {
        const index = cakeInCart.findIndex(item=>
            item.cake_id === cake.cake_id
        )
        cakeInCart[index].quantity = parseInt(e.target.value)
    };  
    const deletecart = (e, cake) => {
        e.preventDefault();
        axios
            .delete(`${SERVER_URL}/cart`, { data: { cake: cake } })
            .then((response) => {
                axios.get(`${SERVER_URL}/cart`)
                    .then(response => {
                        setCakeInCart(response.data)
                        let price = 0
                        for (let i = 0; i < response.data.length; i++) {
                            price += response.data[i].price
                        }
                        setTotalPrice(price);
                    })
                    .catch(error => {
                        console.log('error fetching the cart is:', error)
                    });

            })
            .catch(e => {
                console.log('error deleting the cart is:', e)
            })
    };   
      
    return (
        <div className='cart'>
            <div className='cart__background-color'>
                <Nav></Nav>
                <div className='cart__container'>
                    <h2 className="cart__title">Your Cart</h2>
                    <div className=''>
                        {
                            cakeInCart.length ? (
                                cakeInCart.map((cake) => {
                                
                                    return (
                                        <div className='cart__subcontainer1'>
                                            <div>
                                                <img src={cake.image_url} alt='cake image isssss' className='cart__image'></img>
                                            </div>
                                            <div className='cart__subcontainer2'>
                                                <p className='cart__specs'>{cake.occasion} Cake</p>
                                                <p className='cart__specs'>{cake.size} Size</p>
                                                <p className='cart__specs'>{`$${cake.price/100}`}</p>
                                            </div>
                                            <div className='cart__subcontainer3'>
                                                <input type='number' min='1' name={`${cake.occasion}`} onChange={(e)=>updateQuantity(e,cake)} placeholder='1' className='cart__input'></input>
                                            </div>
                                            <form onClick={(e)=>deletecart(e, cake)}>
                                                <button className='cart__delete'>Delete</button>
                                            </form>
                                        </div>
                                    )
                                })
                
                                
                            ) : (
                                <p className='cart__empty'>Your Cart is Empty</p>
                            )
                            
                        }
                        {/* <p className='cart__empty'>Your total is ${totalPrice}</p> */}

                    </div>
                    <div className='cart__button-container' onClick={handleclick}>
                        <button className='cart__button'>Proceed to Checkout</button>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
};
export default Cart;