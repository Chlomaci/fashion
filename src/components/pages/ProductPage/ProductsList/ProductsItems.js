import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../../../hooks/http.hook";
import { useEffect } from "react";
import { fetchHotItems } from "./productsSlice";
import { selectAll } from './productsSlice';
import ProductCard from "../../../App/ProductCard";

import store from "../../../../store/store";
import Spinner from "../../../Spinner/Spinner";

const ProductItems = () => {

    const dispatch = useDispatch();
    const {getItems} = useHttp();
    const {loadingStatus} = useSelector(state => state.products);
    const {activeCategory} = useSelector(state => state.products);
    const productsArr = selectAll(store.getState());
    console.log(productsArr)

    useEffect(() => {
        switch (activeCategory) {
            case 'hot': 
                dispatch(fetchHotItems("https://fakestoreapi.com/products/category/women's clothing?limit=6", getItems));
                break;
            case 'sale':
                dispatch(fetchHotItems("https://fakestoreapi.com/products/category/men's clothing?limit=6", getItems));
                break;
            case 'trending':
                dispatch(fetchHotItems("https://fakestoreapi.com/products/category/jewelery?limit=6", getItems));
                break;
            case 'new':
                dispatch(fetchHotItems("https://fakestoreapi.com/products/category/electronics?limit=6", getItems));
                break;  
            default:
                dispatch(fetchHotItems("https://fakestoreapi.com/products/category/women's clothing?limit=6", getItems));
        }
        // eslint-disable-next-line
    }, [activeCategory]);

    if (loadingStatus === "loading") {
        return <Spinner/>;
    } else if (loadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    productsArr.sort((a, b) => a.rating < b.rating ? 1 : -1);

    const renderItems = productsArr.map(({name, price, img, rating}) => {
                return (
                    <ProductCard name={name} img={img} rating={rating} oldPrice={price}/>
                )
            });

    return (
        <div className="productList__catalog">
            {renderItems}
        </div>
    )
}

export default ProductItems;