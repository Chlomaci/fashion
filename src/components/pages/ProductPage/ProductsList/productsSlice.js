import { createSlice, createAsyncThunk, createEntityAdapter, createSelector} from "@reduxjs/toolkit"
import { useHttp } from "../../../../hooks/http.hook";

    const productsAdapter = createEntityAdapter();

    const initialState = productsAdapter.getInitialState({
        loadingStatus: 'idle',
        activeCategory: 'hot'
    });

    export const fetchHotItems = createAsyncThunk(
        'products/fetchHotItems',
        async (url) => {
            const {getItems} = useHttp();
            return await getItems(url);
        }
    );

    const productsSlice = createSlice({
        name: 'products',
        initialState,
        reducers: {
            categoryChanged: (state, action) => {
                state.activeCategory = action.payload;
            }
        },
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
    export const {categoryChanged} = actions;

    export default reducer;
    
