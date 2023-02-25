import './Footer.scss'


function Footer(){
    return(
        <div class="footer__container">
        <div class="footer__subcontainer1">
            <p class="footer__title">Get in Touch</p>
            <div class="footer__subcontainer2">
                <a href="">
                    <img class="footer__icons" src="../Assets/Icons/Icon-instagram.svg" alt="insta"></img>
                </a>
                <a href="">
                    <img class="footer__icons footer__icons--margin" src="../Assets/Icons/Icon-facebook.svg" alt="" ></img>
                </a>
                <a href="">
                    <img class="footer__icons footer__icons--margin" src="../Assets/Icons/Icon-twitter.svg" alt=""></img>
                </a> 
            </div>
            <p class="footer__logo1">BANDSITE</p>
        </div>
        <div class="footer__subcontainer3">
            <div class="footer__subcontainer4">
                <div class="footer__content">
                    <p class="footer__content--bold">Cam Adams</p>
                    <p class="footer__content--bold footer__content--text">The Bees Knees Management</p>
                </div>
                <div class="footer__content">
                    <p class="">503 Broadway Penthouse,</p>
                    <p class="footer__content--text">New York, NY 10012, USA</p>
                </div>
                <p class="footer__text footer__content">info@thebeesknees.com</p>
            </div>
            <div class="footer__subcontainer4">
                <div class="footer__content">
                    <p class="footer__content--bold">Pearl Gregg</p>
                    <p class="footer__content--bold footer__content--text">Limitless Artist Group</p>
                </div>
                <div class=" footer__content">
                    <p class="" >Booking Agent for</p>
                    <p class="footer__content--text">US / South America / Japan</p>
                </div>
                <p class="footer__content">pearl@gregg@limitlessag.com</p>
            </div>
            <div class="footer__subcontainer4">
                <div class="footer__content">
                    <p class="footer__content--bold">Carson Whyte</p>
                    <p class="footer__content--bold footer__content--text" >ARCH Entertainment</p>
                </div>
                <div class="footer__content">
                    <p class="">Booking Agent for</p>
                    <p class="footer__content--text">UK / EU / AU</p>
                </div>
                <p class="footer__content">cwhyte@archentertainment.com</p>
            </div>
            
        </div>
        <p class="footer__logo2">BANDSITE</p>
        <p class="footer__copyright">Copyright The Bees Knees @ 2021 All Rights Reserved</p>
    </div>
    )
};
export default Footer;
