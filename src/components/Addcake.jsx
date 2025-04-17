function AddCake({newCake}) {

    var name,flavor,price,tag,image
    var cakes = []
    
    function AddCakeName(event) {
        name = event.target.value
    }

    function AddCakeFlavor(event) {
        flavor = event.target.value
    }

    function AddCakePrice(event) {
        price = event.target.value
    }

    function AddCakeTag(event) {
        tag = event.target.value
    }

    function AddCakeImage(event) {
        image = event.target.value
    }

    function AddNewCake() {
        cakes.push({id:Date.now(),name,price,image,tag})
        newCake([...cakes])
    }

    return (
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" 
            data-bs-target="#exampleModal">Add Cake</button>
            <div class="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Add new Cake</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label  class="col-form-label">Name</label>
                                    <input type="text" class="form-control" id="recipient-name"
                                       value={name} onChange={AddCakeName}/>
                                </div>
                                <div class="mb-3">
                                    <label  class="col-form-label">Flavor</label>
                                    <input class="form-control" id="message-text" 
                                        value={flavor} onChange={AddCakeFlavor}/>
                                </div>
                                <div class="mb-3">
                                    <label  class="col-form-label">Price</label>
                                    <input class="form-control" id="message-text" 
                                        value={price} onChange={AddCakePrice}/>
                                </div>
                                <div class="mb-3">
                                    <label  class="col-form-label">Tag</label>
                                    <input class="form-control" id="tag" 
                                        value={tag} onChange={AddCakeTag}/>
                                </div>
                                <div class="mb-3">
                                    <label  class="col-form-label">image_url</label>
                                    <input class="form-control" id="image-url"
                                        value={image} onChange={AddCakeImage}/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                onClick={AddNewCake}>Add Cake</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCake