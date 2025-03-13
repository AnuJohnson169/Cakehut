function Cake({name,price,image,tag}) {
    var cakeStyle = { "width" : "18rem" }
    return (
        <div class="card" style={cakeStyle}>
            <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{price}</p>
                    {tag && <label className="alert alert-success">{tag}</label>}
                </div>
        </div>
    )
}

export default Cake