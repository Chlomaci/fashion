import {Link} from 'react-router-dom';

import './newCollection.scss';

import sweater from './resources/sweater.jpg';
import jeans from './resources/jeans.jpg';
import baskets from './resources/baskets.jpg';


const NewCollection = () => {
    const categoryItem = (image, name, id) => {
        return (
            <div className="collection__category" key={id}>
                <div className="collection__category-img">
                    <img src={image} alt={name}/>
                    <Link to="/">
                        <button className="collection__button" 
                                onMouseEnter={(e) => {e.target.parentElement.previousSibling.classList.add('dark')}} 
                                onMouseOut={(e) => {e.target.parentElement.previousSibling.classList.remove('dark')}}>
                                    {name}
                        </button>
                    </Link> 
                </div>
            </div>
        )
    }
    
    const categoryData = [{image: sweater, name: 'Sweater'}, {image: jeans, name: 'Jeans'}, {image: baskets, name: 'Baskets'}];
    
    
    const renderCategories = () => {
        const collection = categoryData.map((element, i) => {
            return (
                categoryItem(element.image, element.name, i)
            )
        });
    
        return (
            <div className="collection__category-wrapper">
                {collection}
            </div>
        )
    } 

    return (
        <section data-aos='fade-up' data-aos-duration="1000" className="collection">
            <div className="collection__wrapper">
                <h2 className="collection__title title">New Collection</h2>
                <div className="collection__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            {renderCategories()}
            <div className="collection__rectangle"></div>
        </section> 
    )
}

export default NewCollection;