import './Home.scss';
import Nav from '../../Components/Nav/Nav';
import Main from '../../Components/Main/Main'
import Footer from '../../Components/Footer/Footer'
import { useState, useEffect } from 'react';
import axios from 'axios';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
function Home() {
    const [cakesCollection, setCakesCollection] = useState([]);
    useEffect(()=>{
        axios.get(`${SERVER_URL}/cakes`)
        .then(response=>{
            setCakesCollection(response.data)
        })
        .catch(e=>{
            console.log('error fetching cake collection is:', e)
        })
    }, []);

    return (
        <div className='home__container'>
            <div className='home__subcontainer'>
                <Nav></Nav>
                <Main cakescollection={cakesCollection}></Main>
                <Footer></Footer>
            </div>
        </div>
    )
};
export default Home;