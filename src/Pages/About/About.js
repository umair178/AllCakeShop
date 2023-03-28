import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'
import React, { useEffect, useRef, useState } from 'react';
import './About.scss';
import axios from 'axios';
// import {madhur} from '../../Assests/Cakes/Madhur.svg'

function About(){
    return (
        <div className='about'>
            <div className='about__subcontainer'>
                <Nav></Nav>
                <p className='about__title'>About Us</p>
                <div className='about__subcontainer2'>
                <p className='about__content'>All Cake Shop was started in 2019 by Chef Madhur Chutani with the idea of bringing a little bit of Indian flavours to Lower Mainland .
                    Graduated in pastry arts from Le Cordon bleu (Ottawa)
                    Our mission has always been to bring our customers moments of joy through our products. 3 years later, we can proudly say that we’ve been a part of thousands of special occasions and moments while revolutionizing the pastry industry.
                    With a team that truly cares about creativity, product development and customer satisfaction we can’t wait to be a part of all your moments of joy!
                </p>
                <div>
                    <img></img>
                </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default About;