import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

type CartItem = {
    id: number,
    image: string,
    name: string,
    price: number,
    description: string,
    discount_price?: number,
    weight: number,
    quantity: number
}

type CartState = {
    items: CartItem[],
    totalQuantity: number,
    totalPrice: number,
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
            // Normalize the incoming item data
            const newItem = action.payload;

            // Check if item already exists in cart
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                // If item exists, just increment the quantity
                existingItem.quantity += 1;
            } else {
                // If item is new, add it to the cart with quantity 1
                state.items.push({ ...newItem, quantity: 1 });
            }

            // Update total quantity
            state.totalQuantity = state.items.reduce(
                (total, item) => total + item.quantity, 0
            );

            // Update total price
            state.totalPrice = state.items.reduce(
                (total, item) => total + item.price * item.quantity, 0
            );
        },

        removeFromCart: (state: CartState, action: PayloadAction<number>) => {
            // Get the item ID from the payload
            const itemId = action.payload;

            // Find the item in the cart
            const existingItem = state.items.find(item => item.id === itemId);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    // If only one item left, remove it completely
                    state.items = state.items.filter(item => item.id !== itemId);
                } else {
                    // Otherwise, just decrease the quantity
                    existingItem.quantity -= 1;
                }

                // Update total quantity
                state.totalQuantity = state.items.reduce(
                    (total, item) => total + item.quantity, 0
                );

                // Update total price
                state.totalPrice = state.items.reduce(
                    (total, item) => total + item.price * item.quantity, 0
                );
            }
        },

        // Clear the cart
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;