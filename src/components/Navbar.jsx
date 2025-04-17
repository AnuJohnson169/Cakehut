import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

function Navbar() {

    var cakeName
    var navigate = useNavigate()
    var LoggedIn = useSelector(state => state.isloggedin)

    function SearchCake(event) {
        cakeName = event.target.value
    }

    function FindCake() {
       var path = "/search?q=" + cakeName
       navigate(path)     
    }

    function LogoutUser() { }

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Cake Hut</Link>
                    {LoggedIn && <Link to="/adminpanel">
                            <button class="btn me-2" type="button">Admin Panel</button>
                        </Link>}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" onChange={SearchCake} type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success me-2" onClick={FindCake} type="button">Search</button>
                        </form>
                        {!LoggedIn && <Link to="/login">
                            <button class="btn btn-info me-2" type="button">Login</button>
                        </Link>}
                        {LoggedIn && <Link to="/cart">
                            <button class="btn btn-info me-2" type="button">Cart</button>
                        </Link>}
                        {LoggedIn && <button class="btn btn-danger" onClick={LogoutUser} type="button">Logout</button> }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar