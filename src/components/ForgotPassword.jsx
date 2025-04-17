import axios from "axios"

function ForgotPassword() {

    var email
    function HandleEmail(event) {
        email = event.target.value
    }

    function ResetPassword() {
        axios({
            url: import.meta.env.VITE_APIURL + "/recoverpassword",
            method: "post",
            data: {email:email}
        }).then((response) => {
            console.log(response,"response")
        }).catch((error) => {
            console.log(error,"error")
        })
    }


    return(
        <div>
            <input onChange={HandleEmail} className="form-control"/>
            <button class="btn btn-danger btn-lg btn-block" type="button" onClick={ResetPassword}>Reset Password</button>
        </div>
    )
}

export default ForgotPassword