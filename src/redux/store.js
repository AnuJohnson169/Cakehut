import {configureStore, combineReducers} from '@reduxjs/toolkit'
import AuthReducer from './authReducer'
import CartReducer from './cartReducer'
import Middleware from './middleWare'

var Manager = combineReducers({auth:AuthReducer,cart:CartReducer})

const cakeStore = configureStore({
    reducer: Manager,
    middleware: ()=> [Middleware]
})

export default cakeStore