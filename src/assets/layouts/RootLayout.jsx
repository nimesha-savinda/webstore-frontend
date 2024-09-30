import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation"
import { cartContext } from "../context/cartContext";
import { useState } from "react";
import Footer from "../components/Footer";

function RootLayout(params) {
    

    const [cart,SetCart] = useState([]);

    const updatecart = (product)=>{
        if(cart.find((el)=>el._id===product._id)){
            SetCart(cart.map((el)=>el._id===product._id?{...el,count:el.count+1}:el))
            return
        }else{
            SetCart([...cart,{...product,count:1}])
            return
        }
    }
    return(
        <cartContext.Provider value={{cart:cart,updateCart:updatecart}}>
        <main>
            
            <Navigation/>
            <Outlet/>
            <Footer/>
            
        </main>
        </cartContext.Provider>
    )
}
export default RootLayout