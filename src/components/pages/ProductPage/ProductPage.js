import { Provider } from 'react-redux'
import ProductsList from './ProductsList/ProductsList';
import TimerSection from './TimerSection';
import AboutUs from './AboutUs';
import Footer from './Footer';
import store from '../../../store/store';


import './productPage.scss';
import './titles.scss'

const ProductPage = () => {

    return (
        <div className='productPage'>
            <Provider store={store}>
                <ProductsList/>
            </Provider> 
            <TimerSection/>
            <AboutUs/>
            <Footer/>
        </div>
    )
}

export default ProductPage;