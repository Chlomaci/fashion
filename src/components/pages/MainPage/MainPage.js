import MainHeader from "./MainHeader";
import NewCollection from "./NewCollection";
import Rating from "./Rating";
import Products from "./Products";

import AOS from 'aos';

import  '../../../style/aos/aos.css';
import "./mainPage.scss"

const MainPage = () => {
    AOS.init();
    return (
        <div className="mainPage">
            <MainHeader/>
            <NewCollection/>
            <Rating/>
            <Products/>
        </div>
    )
}

export default MainPage;