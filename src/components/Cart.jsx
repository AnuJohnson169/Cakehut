import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "./Loader"

function Cart() {
    var [cart, SetCart] = useState([])
    useEffect(() => {
        axios({
            url: import.meta.env.VITE_APIURL + "/cakecart",
            method: "get",
            headers: {
                Authorization: localStorage.token
            }
        }).then((response) => {
            console.log(response, "response")
        }).catch((error) => {
            console.log(error, "error")
        })
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

    if (cart.length) {
        return (
            <div>
                {
                    cart.map((item,index) => {
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
            </div>
        )
    } else {
        <Loader />
    }
}

export default Cart