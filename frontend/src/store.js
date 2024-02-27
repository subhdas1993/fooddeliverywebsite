import {combineReducers, createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import {getAllFoodItemsReducer} from './reducers/fooditemsReducers'
import {getAllFoodCategoryReducer} from './reducers/foodcategoriesReducers'
import { cartReducers } from './reducers/cartReducers';
import { registerUserReducers, loginUserReducers } from './reducers/userReducers';
import { placeOrderReducers, getUserOrderReducer } from './reducers/orderReducers';

const finalReducer = combineReducers({
    getAllFoodItemsReducer: getAllFoodItemsReducer,
    getAllFoodCategoryReducer: getAllFoodCategoryReducer,
    cartReducers: cartReducers,
    registerUserReducers: registerUserReducers,
    loginUserReducers: loginUserReducers,
    placeOrderReducers:placeOrderReducers,
    getUserOrderReducer: getUserOrderReducer
})

const cartItems = localStorage.getItem('cartitems') ? JSON.parse(localStorage.getItem('cartitems')) : []

const currentUser = localStorage.getItem('currentuser') ? JSON.parse(localStorage.getItem('currentuser')) : null
const initialState = {
    cartReducers : {
        cartItems: cartItems
    },
    loginUserReducers: {
        currentUser: currentUser
    }
}

const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store