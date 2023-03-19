import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './Main.scss';

function Main(props){
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const navigate = useNavigate();
    const {cakeId} = useParams();
    const handleClick = (cake)=>{
        const cakeId = cake.cake_id;
        navigate (`/cakes/${cakeId}`)
        // axios
        // .get(`${SERVER_URL}/auth/profile`, {withCredentials: true})
        // .then(response=>{
        //     console.log(response.data)
        //     const user_id = response.data.user_id;
        //     const cake_id = cake.cake_id;
        //     const cart_object = {
        //         user_id,
        //         cake_id
        //     }
        //     console.log(cart_object)
        //     axios.post(`${SERVER_URL}/cart`, cart_object).then((response)=>{
                
        //     })
        // })
        
    }
    return (
        <div className='main__container'>
            <p className='main__header'>Crafted With Love</p>
            <div className='main__subcontainer1'>
                <p className='main__subheader'>Our Cake Collection</p>
                <div className='main__subcontainer2'>
                    {
                        props.cakescollection.map((cake) => {
                            return (
                                <div className='main__cakes'>
                                    <div onClick={() => handleClick(cake)} >
                                        
                                        <img src={cake.image_url} className='main__images' ></img>
                                    </div>
                                    <div>
                                        <p className='main__price'>From $80 // Floral</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};
export default Main;