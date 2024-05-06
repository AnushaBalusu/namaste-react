import { createSlice, current } from "@reduxjs/toolkit";

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
            console.log("State", state);
            console.log("Current State", current(state));
            state.items.length = 0; // this will work, equivalent of []
            // state = []  --> this will not work
            // return {items: []}   --> this will work
            console.log("Reset Current State", current(state));
        }
    }
});

// export the actions
export const {addItem, removeItem, clearCart} = cartSlice.actions;

// export the reducer
export default cartSlice.reducer;