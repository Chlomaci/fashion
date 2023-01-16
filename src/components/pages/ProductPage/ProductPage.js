import ProductsList from './ProductsList';
import TimerSection from './TimerSection';
import AboutUs from './AboutUs';
import Footer from './Footer';


import './productPage.scss';
import './titles.scss'

const ProductPage = () => {
    return (
        <div className='productPage'>
            <ProductsList/>
            <TimerSection/>
            <AboutUs/>
            <Footer/>
        </div>
    )
}

export default ProductPage;