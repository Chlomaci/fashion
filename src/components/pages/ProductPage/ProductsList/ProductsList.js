import ProductItems from './ProductsItems';

import './productsList.scss';

const ProductsList = () => {

    const changeActiveStatus = (e) => {
        const activeLink = document.querySelector('.active');
        activeLink.classList.remove('active');
        e.target.classList.add('active');
    }

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
            <div className="productList__wrapper"><ProductItems/></div>
        </section>
    )
}

export default ProductsList;