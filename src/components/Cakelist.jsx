import { useState } from "react"
import Addcake from "./Addcake"
import Cake from "./Cake"

function Cakelist() {
    
    var [cakes,setCakelist] = useState( 
    [
        { name: "Choco Chip Truffle", price: 1195, image: 'chocolate truffle.jpg', tag: "Best Seller" },
        { name: "Red Velvet", price: 750, image: 'red velvet.jpg' },
        { name: "White Forest", price: 550, image: 'white forest.jpg' },
        { name: "Ferrero Rocher", price: 1340, image: 'ferrero rocher.jpg', tag: "Must Try" },
        { name: "Creamy Rasamalai", price: 895, image: 'creamy rasamalai.jpg' },
        { name: "Chocoloate Truffle", price: 700, image: 'truffle.jpg' }
    ])

    function Updatecakelist(morecakes) {
        setCakelist([...cakes,...morecakes])
    }

    return (
        <div>
            <Addcake listofcakes={Updatecakelist} />
            <div class="row">
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
}

export default Cakelist