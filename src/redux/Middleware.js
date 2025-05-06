function Middleware(state) {
    return function (next) {
        return function (action) {
            console.log(action, "action from middleware")
            if (action.type == "FETCH_CART_ITEMS") {
                axios({
                    url: import.meta.env.VITE_APIURL + "/cakecart",
                    method: "get",
                    headers: {
                        Authorization: localStorage.token
                    }
                }).then((response) => {
                    console.log(response, "response")
                    next({
                        type: "FETCH_CART_ITES_SUCCESS",
                        payload: response.data.data
                    })
                }).catch((error) => {
                    console.log(error, "error")
                    next({
                        type: "FETCH_CART_ERROR"
                    })
                })
            } else {
                next(action)
            }
        }
    }
}

export default Middleware