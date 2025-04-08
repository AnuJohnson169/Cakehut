import { useState } from "react"
import AddCake from "./AddCake"

function AdminPanel(props) {
    var cakeStyle = { "width": "18rem" }
    var [cakes, SetCakelist] = useState([    
        { id:1,name: "Choco Chip Truffle", price: 1195, image: 'chocolate truffle.jpg', tag: "Best Seller" },
        { id:2,name: "Red Velvet", price: 750, image: 'red velvet.jpg' },
        { id:3,name: "White Forest", price: 550, image: 'white forest.jpg' },
        { id:4,name: "Ferrero Rocher", price: 1340, image: 'ferrero rocher.jpg', tag: "Must Try" },
        { id:5,name: "Creamy Rasamalai", price: 895, image: 'creamy rasamalai.jpg' },
        { id:6,name: "Chocoloate Truffle", price: 700, image: 'truffle.jpg' }
    ])

    function AddNewCake(newCake) {
        SetCakelist([...cakes, ...newCake])
    }

    function DeleteCake(id) {
        const newCakeList = cakes.filter(cake => cake.id !== id)
        SetCakelist(newCakeList)
    }

    return (
        <div>
            <AddCake newCake={AddNewCake} />
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Flavor</th>
                        <th scope="col">Price</th>
                        <th scope="col">Tag</th>
                        <th scope="col">Image</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cakes.map((each, index) => {
                            return (
                                <tr>
                                    <th scope="row">{each.name}</th>
                                    <td>{each.flavor}</td>
                                    <td>{each.price}</td>
                                    <td>{each.tag && <label className="alert alert-success">{each.tag}</label>}</td>
                                    <td class={cakeStyle}><img src={each.image} /></td>
                                    <td>
                                        <button class="btn btn-danger me-2" onClick={() => DeleteCake(each.id)} type="button">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AdminPanel

