import { createSlice, createAsyncThunk, createEntityAdapter, createSelector} from "@reduxjs/toolkit"
import { useHttp } from "../../../../hooks/http.hook";

    const productsAdapter = createEntityAdapter();

    // const initialState = {
    //     // 'hot': true,
    //     // 'onSale': false,
    //     // 'onTrend': false,
    //     // 'newItems': false,
    //     'entities': [],
    //     'loadingStatus': 'idle',
    // }

    const initialState = productsAdapter.getInitialState({
        'loadingStatus': 'idle'
    });

    export const fetchHotItems = createAsyncThunk(
        'products/fetchHotItems',
        async () => {
            const {getItems} = useHttp();
            return await getItems("https://fakestoreapi.com/products/category/women's%20clothing?limit=6");
        }
    );


    const productsSlice = createSlice({
        name: 'products',
        initialState,
        extraReducers: (builder) => {
            builder
                .addCase(fetchHotItems.pending, state => {state.loadingStatus = 'loading'})
                .addCase(fetchHotItems.fulfilled, (state, action) => {
                    state.loadingStatus = 'idle';
                    productsAdapter.setAll(state, action.payload);
                })
                .addCase(fetchHotItems.rejected, state => {
                    state.loadingStatus = 'error'
                })
                .addDefaultCase(() => {})
        }
    });

    const {actions, reducer} = productsSlice;

    export const {selectAll} = productsAdapter.getSelectors(state => state.products);

    export default reducer;
    
