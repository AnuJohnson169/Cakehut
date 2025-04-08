import { useEffect, useState } from "react"
import Cake from "./Cake"
import axios from "axios"
import Loader from "./Loader"

function CakeList() {
    var [cakes, SetCakeList] = useState([])
    // var cakes = [
    //     { id: 1, name: "Choco Chip Truffle", price: 1195, image: 'chocolate truffle.jpg', tag: "Best Seller" },
    //     { id: 2, name: "Red Velvet", price: 750, image: 'red velvet.jpg' },
    //     { id: 3, name: "White Forest", price: 550, image: 'white forest.jpg' },
    //     { id: 4, name: "Ferrero Rocher", price: 1340, image: 'ferrero rocher.jpg', tag: "Must Try" },
    //     { id: 5, name: "Creamy Rasamalai", price: 895, image: 'creamy rasamalai.jpg' },
    //     { id: 6, name: "Chocoloate Truffle", price: 700, image: 'truffle.jpg' }
    // ]

    useEffect(() => {
        axios({
            url: import.meta.env.VITE_APIURL + "/allcakes",
            method: "get"
        }).then((response) => {
            console.log(response, "res")
            SetCakeList(response.data.data)
        }).catch((error) => {
            console.log(error, "error")
        })
    })

    if (cakes.length) {
        return (
            <div>
                <div class="row me-2">
                    {
                        cakes.map((each, index) => {
                            return (
                                <Cake key={index} {...each} />
                            )
                        })
                    }
                </div>
            </div>
        )
    } else {
        return <Loader />
    }
}

export default CakeList