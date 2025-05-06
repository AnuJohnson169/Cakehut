import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "./Loader"
import { useDispatch, useSelector } from "react-redux"

function Cart() {
    var [cart, SetCart] = useState([])
    var cartCount = useSelector(state => state.CartReducer.cartCount) 
    //(or this) var cartCount = cakeStore.getState().CartReducer.cartCount
    var cartItems = useSelector(state => state.CartReducer.cartItems)

    var dispatch = useDispatch()

    useEffect(() => {
        if(!localStorage.token) {
            Navigate("/login")
        } else {
            dispatch({
                type: "FETCH_CART_ITEMS"
            })
        }
    }, [])


    function removeFromCart(cakeId,index) {
        axios({
            url: import.meta.env.VITE_APIURL + "/removecakefromcart",
            method: "post",
            data: { cakeid },
            headers: {
                Authorization: localStorage.token
            }
        }).then((response) => {
            console.log(response, "response")
            cart.splice(index,1)
            SetCart([...cart])
        }).catch((error) => {
            console.log(error, "error")
        })
    }

    if (cartItems) {
        return (
            <div>
                <h2>Total items in cart {cartCount}</h2>
                {
                    cartItems.map((item,index) => {
                        return (
                            <div className="cart-item">
                                <div>{item.image}</div>
                                <div>{item.name}</div>
                                <div>{item.price}</div>
                                <div>{item.weight}</div>
                                <button type="button" onClick={removeFromCart(item.cakeId,index)}>Remove</button>
                            </div>
                        )
                    })
                }
                <h3>Continue shopping <Link to="/">here</Link></h3>
                <Link to="/checkout" className="btn btn-warning">Checkout</Link>
            </div>
        )
    } else {
        return <Loader />
    }
}

export default Cart