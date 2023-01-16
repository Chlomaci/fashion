import ProductCard from "../../App/ProductCard";

import "./products.scss";

import sweaterShirt from './resources/sweater_short.jpg';
import pantsFashion from './resources/pants_fashion.jpg';


const Products = () => {
    return(
    
    <section className="products">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="products__wrapper">
                        <div className="products__content">
                            <div className="products__title title">Best Seller Product</div>
                            <div className="products__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. 
                                    Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.</div>
                            <button className="btn">See more</button>
                        </div>
                        <div className='products__examples'>
                            <ProductCard img={sweaterShirt} name="Sweater Shirt" rating={5} oldPrice="$45.99" newPrice="$35.99"/>
                            <ProductCard img={pantsFashion} name="Pants fashion" rating={5} oldPrice="$55" newPrice="$44.99"/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="products__wrapper">
                            <div className="products__content">
                                <div className="products__title title">Best Seller Product</div>
                                <div className="products__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. 
                                        Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.</div>
                                <button className="btn">See more</button>
                            </div>
                            <div className='products__examples'>
                                <ProductCard img={sweaterShirt} name="Sweater Shirt" rating={5} oldPrice="$45.99" newPrice="$35.99"/>
                                <ProductCard img={pantsFashion} name="Pants fashion" rating={5} oldPrice="$55" newPrice="$44.99"/>
                            </div>
                        </div>
                </div>
                <div class="carousel-item">
                    <div className="products__wrapper">
                            <div className="products__content">
                                <div className="products__title title">Best Seller Product</div>
                                <div className="products__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. 
                                        Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.</div>
                                <button className="btn">See more</button>
                            </div>
                            <div className='products__examples'>
                                <ProductCard img={sweaterShirt} name="Sweater Shirt" rating={5} oldPrice="$45.99" newPrice="$35.99"/>
                                <ProductCard img={pantsFashion} name="Pants fashion" rating={5} oldPrice="$55" newPrice="$44.99"/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Products;