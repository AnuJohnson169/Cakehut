function AuthReducer(state={
    isLoggedin: localStorage.token ? true: false
},action) {
    switch(action.type) {
        case "LOGIN_SUCCESS": {
            state = {...state},
            state.isLoggedin = true
            return state
        }

        default: return state
    }
}

export default AuthReducer