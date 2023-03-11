import './Home.scss';
import Nav from '../../Components/Nav/Nav';
import Main from '../../Components/Main/Main'
function Home() {
    return (
        <div className='home__container'>
            <Nav></Nav>
            <Main></Main>
        </div>
    )
};
export default Home;