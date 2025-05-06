import axios from "axios"
import "./Login.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"

function Login({ LoggedIn }) {

    var navigate = useNavigate()
    var email, password
    var [loginCredentials, SetLoginCredentials] = useState(true)
    var dispatch = useDispatch()

    function HandleEmail(event) {
        email = event.target.value
    }

    function HandlePassword(event) {
        password = event.target.value
    }

    function Userlogin() {
        axios({
            url: import.meta.env.VITE_APIURL + "/login",
            method: "post",
            data: { email: email, password: password }
        }).then((response) => {
            console.log(response, "res")
            localStorage.token = response.data.token
            if (response.data.password === password && response.data.email == email) {//if (response.data.token)
                LoggedIn()
                dispatch({
                    type: "LOGIN_SUCCESS"
                })
                navigate("/")
            } else {
                SetLoginCredentials(false)
            }
        }).catch((error) => {
            console.log(error, "error")
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
                                    <h3 class="fw-normal mb-3 pb-3" style={{ "letter-spacing": "1px" }}>Log in</h3>
                                    { !loginCredentials && <label className="alert alert-danger">Invalid email or password</label> }
                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input type="email" onChange={HandleEmail} id="form2Example18" class="form-control form-control-lg" />
                                        <label class="form-label" for="form2Example18">Email address</label>
                                    </div>
                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input type="password" onChange={HandlePassword} id="form2Example28" class="form-control form-control-lg" />
                                        <label class="form-label" for="form2Example28">Password</label>
                                    </div>
                                    <div class="pt-1 mb-4">
                                        <button data-mdb-button-init data-mdb-ripple-init
                                            onClick={Userlogin} class="btn btn-info btn-lg btn-block" type="button">Login</button>
                                    </div>
                                    <p class="small mb-5 pb-lg-2"><Link to="/forgotpassword">Forgot password?</Link></p>
                                    <p>Don't have an account? <Link to="/signup" class="link-info">Register here</Link></p>
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

export default Login