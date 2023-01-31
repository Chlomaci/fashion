import { Link } from "react-router-dom";

import RenderStars from "../renderStars";

import star from '../pages/star.svg';



const ProductCard = ({img, rating, name, oldPrice, newPrice}) => {
    return (
        <div className="products__item">
            {/* <div className='products__img'><Link to='/product'><img src={img} alt={name}/></Link></div> */}
            <Link to='/product'><img src={img} alt={name} className='products__img'/></Link>
            
            {/* <img src={img} alt={name} className='products__img'/> */}
            <div className="products__description">
                <div className="products__rating"><RenderStars star={star} rating={Math.round(rating)}/></div>
                <div className="products__item-title"><Link to='/product'>{name}</Link></div>
                <div className="products__price">
                    <div className="products__price-old">{oldPrice}</div>
                    <div className="products__price-new">{newPrice}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;

