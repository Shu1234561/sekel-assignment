import { createSlice } from "@reduxjs/toolkit";
import { ProductDetail } from "../../Common/interface";

interface CartItems {
    items: ProductDetail[];
}

const initialState: CartItems = {
    items: [],
}

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
        },
        removeItems: (state, action) => {
            state.items.filter((item) => item.id !== action.payload)
        }
    }
})

export const { addItems, removeItems } = cart.actions;
export default cart.reducer