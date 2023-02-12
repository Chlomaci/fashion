import './rating.scss';

import red from './resources/red.jpg'
import points from './resources/rating-points.svg'

const Rating = () => {
    return (
        <section data-aos='fade-up' data-aos-duration="1000" className="rating">
            <div className="rating__wrapper">
                <div className="rating__img-wrapper">
                    <img src={red} alt="red coat" className="rating__img"/>
                </div>
                <div className="rating__content">
                    <div className="rating__title title">Best Fashion Since 2010</div>
                    <div className="rating__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. 
                    At arcu ornare rhoncus, elementum non viverra. </div>
                </div>
                <div className="rating__data">
                    <div className="rating__data-item">
                        <div className="rating__number">2010</div>
                        <div className="rating__subtitle">Founded</div>
                        
                    </div>
                    <div className="rating__data-item">
                        <div className="rating__number">5000+</div>
                        <div className="rating__subtitle">Product Sold</div>
                        
                    </div>
                    <div className="rating__data-item">
                        <div className="rating__number">4500+</div>
                        <div className="rating__subtitle">Best Reviews</div>
                    </div>
                </div>
            </div>
            
            <div className="rating__points rating__points-top"><img src={points} alt=""/></div>
            <div className="rating__points rating__points-bottom"><img src={points} alt=""/></div>
        </section>
    )
}

export default Rating;