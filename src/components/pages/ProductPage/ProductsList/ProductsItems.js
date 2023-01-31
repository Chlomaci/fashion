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
    console.log(loadingStatus);
    const productsArr = selectAll(store.getState());
    console.log(productsArr)

    useEffect(() => {
        dispatch(fetchHotItems(getItems));
        // eslint-disable-next-line
    }, []);

    if (loadingStatus === "loading") {
        return <Spinner/>;
    } else if (loadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    productsArr.sort((a, b) => a.age < b.age ? 1 : -1);

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