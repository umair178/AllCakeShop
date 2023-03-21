import { useEffect, useRef, useState } from 'react';
import './Cart.scss';
import axios from 'axios';
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'
function Cart(){
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const formRef = useRef();
    const [cakeInCart, setCakeInCart] = useState([])
    useEffect(()=>{
        axios
        .get(`${SERVER_URL}/cart`)
        .then(response=>{
            setCakeInCart(response.data)
            console.log('cart array is:', response.data)

        })
    }, []);
    const handleclick = ()=>{ 
        console.log('clicked')
        const items = { items:[
            {id: 1, quantity: 3},
            {id: 2, quantity: 1}
        ]}
        axios.post(`${SERVER_URL}/create-checkout-session`, items)
        .then(res=>{
            console.log(res.data)
            window.location = res.data.url
        })
        .catch(e=>{
            console.log('error is:', e)
        })
    };
    
    return (
        <div>
            <Nav></Nav>
            <div className='cart__container'>
                <h2 className="cart__title">Your Cart</h2>
                {
                    cakeInCart.map((cake) => {
                        return (
                            <div className='cart__subcontainer1'>
                                <div className='cart__subcontainer2'>
                                    <p className='cart__specs'>{cake.occasion}</p>
                                    <p className='cart__specs'>Medium Serving</p>
                                    <p className='cart__specs'>Total $80</p>
                                </div>
                                <div>
                                    <img src={cake.image_url} alt='cake image isssss' className='cart__image'></img>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='cart__button-container' onClick={handleclick}>
                    <button className='cart__button'>Proceed to Checkout</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
};
export default Cart;