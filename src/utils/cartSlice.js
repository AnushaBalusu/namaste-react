import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        // action : reducer function
        addItem: (state, action) => {
            // mutating the state
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0; // same as []
            // state = []  --> this will not work
        }
    }
});

// export the actions
export const {addItem, removeItem, clearCart} = cartSlice.actions;

// export the reducer
export default cartSlice.reducer;