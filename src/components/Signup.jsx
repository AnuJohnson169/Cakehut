import { useState } from "react"

function Signup() {

    var [userCount,setUserCount] = useState(0)
    var [name, setUserName] = useState() 
    var [users, setUsers] = useState([])
    function RegisterName(event) {
        name = event.target.value
    }

    function RegisterUser(){
        setUserCount(userCount + 1)
        setUserName(name)
        users.push(name)
        setUsers([...users])
    }

    function DeleteUser(index) {
        setUserCount(userCount - 1)
        users.splice(index,1)
        setUsers([...users])
    }

    return(
        <div>
            <h1>Total Registered Users : {userCount}</h1>
            <div>
                { users.map((each,index) => {
                    return (
                        <div onClick={DeleteUser.bind(null,index)}>{each}</div>
                    )}
                )}
            </div>
            <input type="text" onChange={RegisterName} placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <button type="button" onClick={RegisterUser}>Register</button>
        </div>
    )
}

export default Signup