import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "./Loader"
import { useDispatch } from "react-redux"

function CakeDetails() {
    var [cakeDetails,SetCakeDetails] = useState()
    var params = useParams()
    var cakeId = params.id
    var dispatch = useDispatch()
    useEffect(() => {
        axios({
            url: import.meta.env.VITE_APIURL+ "/cake"+cakeId,
            method: "get"
        }).then((response) => {
            console.log(response,"response")
            SetCakeDetails(response.data.data)
        }).catch((error) => {
            console.log(error,"error")
        })
    },[])

    function AddToCart() {
        var data = {
            name: cakeDetails.name,
            price: cakeDetails.price,
            image: cakeDetails.image,
            weight: cakeDetails.weight,
            cakeId: cakeDetails.cakeId
        }
        axios({
            url: import.meta.env.VITE_APIURL+"/addcaketocart",
            method:"post",
            data:data,
            headers: {
                Authorization: localStorage.token
            }
        }).then((response) => {
            console.log(response,"resss")
            dispatch({
                type: "ADD_TO_CART_SUCCESS"
            })

        }).catch((error) => {
            console.log(error,"error")
        })
    }

    if (cakeDetails) {
        return(
            <div>
                <div className="row">
                    <div className="col-7">{cakeDetails.name}</div>
                    <div className="col-7">
                        <img src={cakeDetails.image} alt="" />
                    </div>
                    <div className="col-7">{cakeDetails.price}</div>
                    <div className="col-7">{cakeDetails.weight}</div>
                </div>
                <button className="btn btn-danger" onClick={AddToCart} type="button">Add to Cart</button>
            </div>
        )
    } else {
        return(
            <Loader />
        )
    }
}

export default CakeDetails