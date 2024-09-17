
import Navbar from "./components/Navbar/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "./components/Footer/Footer.jsx";
import React from "react";

const App = () => {
    return (
        <>
            <div className='app'>
            <Navbar/>
            <Home/>
            <Routes>
                <Route path='/' component={<Home/>}/>
                <Route path='/cart' component={<Cart/>}/>
                <Route path='/order' component={<PlaceOrder/>}/>
            </Routes>
        </div>
            <Footer/>
        </>
    )
}
export default App
