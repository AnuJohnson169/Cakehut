import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './reducer'

const cakeStore = configureStore({
    reducer: AuthReducer
})

export default cakeStore