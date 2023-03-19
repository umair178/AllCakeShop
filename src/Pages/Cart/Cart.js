import { useEffect, useRef, useState } from 'react';
import './Cart.scss';
import axios from 'axios';
function Cart(){
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const formRef = useRef();
    const [cakeInCart, setCakeInCart] = useState([])
    useEffect(()=>{
        axios
        .get(`${SERVER_URL}/cartdetails`)
        .then(response=>{
            setCakeInCart(response.data)
            console.log('cart array is:', response.data)

        })
    }, []);

    const addOrder = (e) => {
        e.preventDefault();
        // Add video to the back-end server, and then update
        // the state with the response
        const new_order = {
            title: formRef.current.videotitle.value,
            description: formRef.current.videodescription.value,
        }
        console.log(new_order)
        axios.post("http://localhost:8080/videos", new_order).then((response)=>{
        })
        document.getElementById('form').reset()
    };
    
    return (
        <div>
            <h2 className="cart__title">Your Cart</h2>
            {
                cakeInCart.map((cake) => {
                    return (
                        <div className='cart__container'>
                            <div>
                                <img src={cake.image_url} alt='cake image isssss'></img>
                            </div>
                            <div></div>

                        </div>
                    )
                })
            }
    

        {/* <form ref={formRef} onSubmit={addOrder} method='post' id='form'>
            <div className='videoupload'>
                <div className='videoupload__container1'>
                    <p className='videoupload__thumbnail'>VIDEO THUMBNAIL</p>
                </div>
                <div className='upload__container'>
                    <div>
                        <upload className='upload__subcontainer1'>
                            <label for='videodetitle' className='upload__label'>
                                User ID
                            </label>
                            <input className='upload__input1' type='text'  name='videotitle' placeholder='Add a title to your video'></input>
                            <label for='videodescription' className='upload__label'>
                                ADD A VIDEO DESCRIPTION
                            </label>
                            <input className='upload__input2' type='text'  name='videodescription' placeholder='Add a description to your video'></input>
                            
                        </upload>
                    </div>
                </div>
            </div>
            <div className='upload__subcontainer2'>
                <div className='upload__publish'>
                    <button className='upload__publish--button' >PUBLISH</button>
                </div>
            </div>
        </form> */}
            
        </div>

    )
};
export default Cart;