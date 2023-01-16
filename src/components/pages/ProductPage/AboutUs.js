import Glide from '@glidejs/glide';
import { useEffect } from 'react'

import author1 from "./resources/author1.jpg";
import author2 from "./resources/author2.jpg";

import "./glide/glide.core.scss";
import "./glide/glide.theme.scss"
import "./aboutUs.scss";


const AboutUs = () => {

    useEffect(() => {
        new Glide('.glide', {
            autoplay: 4000,
            hoverpause: true,
            peek: 100,
            type: 'carousel'
        }).mount()
    }, [])
    
    return (
        <section className="about">
            <h2 className="about__title title_64">What People Say About Us</h2>
            <div className="about__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam.</div>
            <div className="about__comment">
                <div className="glide">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            <li className="glide__slide">
                                <div className="about__comment__wrapper">
                                    <div className="about__comment_title">Comfortable And Meet All My Expectation !</div>
                                    <div className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. </div>
                                    <div className="about__author">
                                        <img src={author1} alt="John Deep" className="about__img"/>
                                        <div className="about__name">John Deep</div>
                                        <div className="about__prof">Customer</div>
                                    </div>
                                </div>
                                <div className="about__comment__wrapper">
                                    <div className="about__comment_title">Comfortable And Meet All My Expectation !</div>
                                    <div className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. </div>
                                    <div className="about__author">
                                        <img src={author1} alt="John Deep" className="about__img"/>
                                        <div className="about__name">John Deep</div>
                                        <div className="about__prof">Customer</div>
                                    </div>
                                </div>
                                <div className="about__comment__wrapper">
                                    <div className="about__comment_title">Comfortable And Meet All My Expectation !</div>
                                    <div className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. </div>
                                    <div className="about__author">
                                        <img src={author1} alt="John Deep" className="about__img"/>
                                        <div className="about__name">John Deep</div>
                                        <div className="about__prof">Customer</div>
                                    </div>
                                </div>
                            </li>
                            <li className="glide__slide">
                            <div className="about__comment__wrapper">
                                    <div className="about__comment_title">Comfortable And Meet All My Expectation !</div>
                                    <div className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. </div>
                                    <div className="about__author">
                                        <img src={author1} alt="John Deep" className="about__img"/>
                                        <div className="about__name">John Deep</div>
                                        <div className="about__prof">Customer</div>
                                    </div>
                                </div>
                                <div className="about__comment__wrapper">
                                    <div className="about__comment_title">Comfortable And Meet All My Expectation !</div>
                                    <div className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. </div>
                                    <div className="about__author">
                                        <img src={author1} alt="John Deep" className="about__img"/>
                                        <div className="about__name">John Deep</div>
                                        <div className="about__prof">Customer</div>
                                    </div>
                                </div>
                                <div className="about__comment__wrapper">
                                    <div className="about__comment_title">Comfortable And Meet All My Expectation !</div>
                                    <div className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. </div>
                                    <div className="about__author">
                                        <img src={author1} alt="John Deep" className="about__img"/>
                                        <div className="about__name">John Deep</div>
                                        <div className="about__prof">Customer</div>
                                    </div>
                                </div>
                            </li>
                            <li className="glide__slide">
                                <div className="about__comment__wrapper">
                                    <div className="about__comment_title">Comfortable And Meet All My Expectation !</div>
                                    <div className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. </div>
                                    <div className="about__author">
                                        <img src={author1} alt="John Deep" className="about__img"/>
                                        <div className="about__name">John Deep</div>
                                        <div className="about__prof">Customer</div>
                                    </div>
                                </div>
                                <div className="about__comment__wrapper">
                                    <div className="about__comment_title">Comfortable And Meet All My Expectation !</div>
                                    <div className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. </div>
                                    <div className="about__author">
                                        <img src={author1} alt="John Deep" className="about__img"/>
                                        <div className="about__name">John Deep</div>
                                        <div className="about__prof">Customer</div>
                                    </div>
                                </div>
                                <div className="about__comment__wrapper">
                                    <div className="about__comment_title">Comfortable And Meet All My Expectation !</div>
                                    <div className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. </div>
                                    <div className="about__author">
                                        <img src={author1} alt="John Deep" className="about__img"/>
                                        <div className="about__name">John Deep</div>
                                        <div className="about__prof">Customer</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="glide__bullets" data-glide-el="controls[nav]">
                        <button className="glide__bullet" data-glide-dir="=0"></button>
                        <button className="glide__bullet" data-glide-dir="=1"></button>
                        <button className="glide__bullet" data-glide-dir="=2"></button>
                    </div>
                </div>
                    {/* <div className="about__comment__wrapper">
                        <div className="about__comment_title">Comfortable And Meet All My Expectation !</div>
                        <div className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. </div>
                        <div className="about__author">
                            <img src={author1} alt="John Deep" className="about__img"/>
                            <div className="about__name">John Deep</div>
                            <div className="about__prof">Customer</div>
                        </div>
                    </div>
                    <div className="about__comment__wrapper">
                        <div className="about__comment_title">Comfortable And Meet All My Expectation !</div>
                        <div className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. </div>
                        <div className="about__author">
                            <img src={author1} alt="John Deep" className="about__img"/>
                            <div className="about__name">John Deep</div>
                            <div className="about__prof">Customer</div>
                        </div>
                    </div>
                    <div className="about__comment__wrapper">
                        <div className="about__comment_title">Comfortable And Meet All My Expectation !</div>
                        <div className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. </div>
                        <div className="about__author">
                            <img src={author1} alt="John Deep" className="about__img"/>
                            <div className="about__name">John Deep</div>
                            <div className="about__prof">Customer</div>
                        </div>
                    </div> */}
                </div>
        </section>
    )
}

export default AboutUs