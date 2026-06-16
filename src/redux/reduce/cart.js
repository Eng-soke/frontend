
import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',

    initialState:{
        items: [],
        totalPrice: 0,
        totalQuantity: 0,
    },

    reducers:{
        
        addToCartItem: (state,action)=>{
            const existItem = state.items.find((item)=> item._id == action.payload._id)
            if (existItem) {
                existItem.quantity += 1
            }else{

                state.items.push({...action.payload, quantity: 1})
            }
        },

        removeItemFromCart: (state,action)=>{

            state.items = state.items.filter((item)=> item._id != action.payload._id)

        },

        increament:(state,action)=>{
            const existItem = state.items.find((item)=> item._id === action.payload._id)
            if (existItem) {
                existItem.quantity += 1
            }
        },

        decreament: (state,action)=>{
            const existItem = state.items.find((item)=> item._id === action.payload._id)
            if (existItem.quantity > 1) {
                existItem.quantity -= 1
            }
        },

        calculateTotalQuantity: (state)=>{
            let qty = 0

            state.items.forEach((item)=>{
                qty += item.quantity
            })

            state.totalQuantity = qty
        },

        calculateTotalPrice: (state)=>{
            let total = 0
            state.items.forEach((item)=>{
                total += item.price * item.quantity
            })

            state.totalPrice = total
        }
    }


})

export const {addToCartItem, calculateTotalPrice,calculateTotalQuantity, removeItemFromCart, increament, decreament} = cartSlice.actions

export default cartSlice.reducer