import { Link, Outlet } from "react-router-dom";

function Checkout() {
    return (
        <div>
            <div class="row">
                <div className="col-4">
                    <div><Link to="/checkout/addaddress">Add Address</Link></div>
                    <div><Link to="/checkout/payment">Payment</Link></div>
                    <div><Link to="/checkout/summary">Summary</Link></div>
                </div>
                <div className="col-4">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Checkout