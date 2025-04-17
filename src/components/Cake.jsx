import { useState } from "react"
import { Link } from "react-router-dom"

function Cake({id,name,price,image,tag}) {
    var cardStyle = { "width" : "18rem" }
    var imgStyle = { "height" : "262px"}
    var [cake, SetCakeCart] = useState([])

    function AddToCart() {
        cake.push({id:id,name:name,price:price,image:image,tag:tag})
        SetCakeCart(cake)
        console.log(cake,"carted")
    }

    return (
        <div class="card" style={cardStyle}>
            <Link to={"details/"+ id}>
                <img src={image} class="card-img-top" style={imgStyle} alt="..." />
            </Link>
                <div class="card-body">
                    <h5 class="card-title">{name} <span class="badge text-bg-danger" style={{"cursor":"pointer"}} onClick={AddToCart}>Add</span>
                    </h5>
                    <p class="card-text">{price}</p>
                    {tag && <label className="alert alert-success">{tag}</label>}
                </div>
        </div>
    )
}

export default Cake