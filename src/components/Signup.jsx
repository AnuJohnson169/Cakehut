import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

function Signup() {

    var name,email,password
    var [userExists, SetUserStatus] = useState(false)
    function RegisterName(event) {
        name = event.target.value
    }

    function RegisterEmail(event) {
        email = event.target.value
    }

    function RegisterPassword(event) {
        password = event.target.value
    }

    function RegisterUser() {
        axios({
            url: import.meta.env.VITE_APIURL + "/register",
            method: "post",
            data: {name:name, email:email, password:password}
        }).then((response) => {
            console.log(response, "res")
            var registerUser = response.data
        }).catch((error) => {
            console.log(error, "error")
            if(error.data.statuscode == 409) {
                SetUserStatus(true)
            }
        })
    }

    return (
        <div>
            <section class="vh-100">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6 text-black">
                            <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5">
                                <form style={{ "width": "23rem" }}>
                                    <h3 class="fw-normal mb-3 pb-3" style={{ "letter-spacing": "1px" }}>Sign Up</h3>
                                    { userExists && <label className="alert alert-danger">User already exists</label>}
                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input type="text" onChange={RegisterName} id="form2Example18" class="form-control form-control-lg" />
                                        <label class="form-label" for="form2Example18">Username</label>
                                    </div>
                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input type="email" onChange={RegisterEmail} id="form2Example38" class="form-control form-control-lg" />
                                        <label class="form-label" for="form2Example28">Email Address</label>
                                    </div>
                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input type="password" onChange={RegisterPassword} id="form2Example28" class="form-control form-control-lg" />
                                        <label class="form-label" for="form2Example28">Password</label>
                                    </div>
                                    <div class="pt-1 mb-4">
                                        <button data-mdb-button-init data-mdb-ripple-init
                                            onClick={RegisterUser} class="btn btn-info btn-lg btn-block" type="button">Sign Up</button>
                                    </div>
                                    <p>Already have an account? <Link to="/login" class="link-info">Login here</Link></p>
                                </form>
                            </div>
                        </div>
                        <div class="col-sm-6 px-0 d-none d-sm-block">
                            <img src="login cover.jpg"
                                alt="Login image" class="w-100 vh-100" style={{ "object-fit": "cover", "object-position": "left" }} />
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Signup