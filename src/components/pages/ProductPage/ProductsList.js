import { useState } from 'react';
import { useEffect } from 'react';

import './productsList.scss';

const ProductsList = () => {
    const {hot, setHot} = useState(true),
        {onSale, setOnSale} = useState(false),
        {onTrend, setOnTrend} = useState(false),
        {newItems, setNewItems} = useState(false);

    const changeActiveStatus = (e) => {
        const activeLink = document.querySelector('.active');
        activeLink.classList.remove('active');
        e.target.classList.add('active');
    }

    const catalogArr = []

    fetch('', {
        method: 'POST',
        body: JSON.stringify(),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(json => catalogArr = json)


    return (
        <section className='productList'>
            <h1 className="productList__title title_64">Our Products</h1>
            <div className="productList__menubar">
                <ul onClick={changeActiveStatus} className="productList__menubar-items">
                    <li className="productList__menubar-link active">Hot</li>
                    <li className="productList__menubar-link">On sale</li>
                    <li className="productList__menubar-link">Trending now</li>
                    <li className="productList__menubar-link">New arrival</li>
                </ul>
            </div>
            <div className="productList__catalog">something</div>
        </section>
    )
}

export default ProductsList;