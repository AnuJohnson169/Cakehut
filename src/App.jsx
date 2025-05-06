import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Cart from './components/Cart.jsx'
import AdminPanel from './components/AdminPanel.jsx'
import CakeDetails from './components/CakeDetails.jsx'
import SearchCake from './components/SearchCake.jsx'
import AddCake from './components/AddCake.jsx'
import PathNotFound from './components/Pathnotfound.jsx'
import ForgotPassword from './components/ForgotPassword.jsx'
import Checkout from './components/Checkout.jsx'
import AddAddress from './components/AddAddress.jsx'
import Payment from './components/Payment.jsx'
import Summary from './components/Summary.jsx'

function App() {  

  var [isLoggedIn,SetLogin] = useState(false)

  function HasLoggedin() {
      SetLogin(true)
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar LoggedIn={isLoggedIn}/>
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="login" element={<Login LoggedIn={HasLoggedin} /> } />
          <Route path="signup" element={<Signup />} />
          <Route path="search" element={<SearchCake />} />
          <Route path="adminpanel" element={<AdminPanel />} />
          <Route path="addcake" element={<AddCake />} />
          <Route path="details/:id" element={<CakeDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="checkout" element={<Checkout />} >
            <Route path="addaddress" element={<AddAddress />} />
            <Route path="payment" element={<Payment />} />
            <Route path="summary" element={<Summary />} />
          </Route>
          <Route path="*" element={<PathNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
