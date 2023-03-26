import './Footer.scss'
import facebookicon from '../../Assests/Icons/Icon-facebook.svg'
import instagramicon from '../../Assests/Icons/Icon-instagram.svg'
import twittericon from '../../Assests/Icons/Icon-twitter.svg'


function Footer(){
    return(
        <div className="footer__container">
            <div className="footer__subcontainer3">
                <div className="footer__subcontainer4">
                    <div className="footer__content">
                        <p className="footer__headers">Pickup Location</p>
                    </div>
                    <div className="footer__content">
                        <p className="">Pre-Order only</p>
                        <p className="footer__content--text">6358 167B Street, Surrey, BC</p>
                    </div>
                    <p className="footer__text footer__content2">allcakshopp@gmail.com</p>
                </div>
                <div className="footer__subcontainer4">
                    <div className="footer__content">
                        <p className="footer__headers">Hours</p>
                    </div>
                    <div className='footer__subcontainer5'>
                        <div className=" footer__content">
                            <p className="" >Monday - Friday</p>
                            <p className="footer__content--text">9:00 AM - 5:00 PM</p>
                        </div>
                        <div className=" footer__content3">
                            <p className="" >Saturday - Sunday</p>
                            <p className="footer__content--text">10:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                    
                </div>
                <div className="footer__subcontainer4">
                    <div className="footer__content">
                        <p className="footer__headers">Social</p>
                    </div>
                    <div className="footer__content">
                        <a href="">
                            <img className="footer__icons" src={facebookicon} alt="insta"></img>
                        </a>
                        <a href="">
                            <img className="footer__icons footer__icons--margin" src={twittericon} alt="" ></img>
                        </a>
                        <a href="">
                            <img className="footer__icons footer__icons--margin" src={instagramicon} alt=""></img>
                        </a>
                    </div>

                </div>

            </div>
            <p className="footer__logo2">BANDSITE</p>
        </div>
    )
};
export default Footer;
