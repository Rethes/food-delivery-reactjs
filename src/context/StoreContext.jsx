import {createContext, useEffect, useState} from "react";
import {food_list} from "../assets/assets.js";

export const StoreContext = createContext(null);

const StoreContextProvider = ( props ) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        // creates new entry for the food product
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev, [itemId]:1 }))
        }else{
            // if product is available, inc value by one
            setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));

        }
    }

    const removeFromCart = (itemId) => {
        //pass prev cart data, then set itemId, prev Item
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}));

    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    return (
        <StoreContext.Provider value={ contextValue }>
            {/* eslint-disable-next-line react/prop-types */}
            { props.children }
        </StoreContext.Provider>
    )
}

export default  StoreContextProvider;