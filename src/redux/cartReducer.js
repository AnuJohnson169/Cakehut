function CartReducer(state={cartCount: 0},action) {

    switch(action.type) {
        case "ADD_TO_CART_SUCCESS": {
            state = {...state},
            state.cartCount = state.cartCount + 1
            return state
        }

        case "FETCH_CART_ITEMS_SUCCESS": {
            state = {...state},
            state.cartItems = action.payload
            return state
        }

        default: return state
    }
}

export default CartReducer