import { configureStore, combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'
import cartSlice from '../reduce/cart'
import storage from 'redux-persist/es/storage'


const configPersist = {
    'key': 'root',
    storage
}

const reducers = combineReducers({
        cart : cartSlice
})

const persistReducers = persistReducer(configPersist, reducers)

const store = configureStore({
    reducer: persistReducers
})

export default store