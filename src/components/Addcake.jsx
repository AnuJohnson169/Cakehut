function Addcake({listofcakes}) {

    var name,price,tag,image
    var cakes = []
    
    function Addcakename(event) {
        name = event.target.value
    }

    function Addcakeprice(event) {
        price = event.target.value
    }

    function Addcaketag(event) {
        tag = event.target.value
    }

    function Addcakeimage(event) {
        image = event.target.value
    }

    function AddNewCake() {
        cakes.push({name,price,image,tag})
        listofcakes([...cakes])
    }

    return (
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" 
            data-bs-target="#exampleModal">Add Cake</button>
            <div class="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                       value={name} onChange={Addcakename}/>
                                </div>
                                <div class="mb-3">
                                    <label  class="col-form-label">Price</label>
                                    <input class="form-control" id="message-text" 
                                        value={price} onChange={Addcakeprice}/>
                                </div>
                                <div class="mb-3">
                                    <label  class="col-form-label">Tag</label>
                                    <input class="form-control" id="tag" 
                                        value={tag} onChange={Addcaketag}/>
                                </div>
                                <div class="mb-3">
                                    <label  class="col-form-label">image_url</label>
                                    <input class="form-control" id="image-url"
                                        value={image} onChange={Addcakeimage}/>
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

export default Addcake