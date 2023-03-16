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
            setCake(res.data);
            console.log(res.data)
        })
    },[])


    const handleClick = ()=>{
        console.log(cake);
        axios
        .get(`${SERVER_URL}/auth/profile`, {withCredentials: true})
        .then(response=>{
            console.log(response.data)
            const user_id = response.data.user_id;
            const [cake_obj] = cake
            const cake_id = cake_obj.cake_id;
            const cart_object = {
                user_id,
                cake_id
            }
            console.log(cart_object)
            // axios.post(`${SERVER_URL}/cart`, cart_object).then((response)=>{
                
            // })
        })
        
    };
    return(
        <div>
            <Nav></Nav>
            <div className='cake__container'>
                <div>
                    <p className='cake__description'>Peony Dreams - Vanilla bean sponge base with classic italian buttercream with your choice of flavour, finished with fresh peonies, edible gold and pearls.</p>
                </div>
                <div className='cake__subcontainer1'>
                    <div className='cake__subcontainer2'>
                        <div>
                            <p className='cake__specs'>Size</p>
                            <p className='cake__specscontent'>Medium (12 - 14 Servings)</p>
                        </div>
                        <div>
                            <p className='cake__specs'>Style</p>
                            <p className='cake__specscontent'>Fresh Floral</p>
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
                        <img src='http://localhost:8080/IMG_6497 1.svg' className='cake__image'></img>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
};
export default Cake;