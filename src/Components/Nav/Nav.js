import './Nav.scss'

function Nav(){
    return(
        <div>
            <div className='nav__container'>
                <p className='nav__header'>All Cake Shop</p>
                <div className='nav__subcontainer'>
                    <p className='nav__subheader'>Home</p>
                    <p className='nav__subheader nav__subheader--padding'>Shop</p>
                    <p className='nav__subheader'>About us</p>
                </div>

            </div>
        </div>
    )
};
export default Nav;