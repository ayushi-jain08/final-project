import { createContext, useContext, useEffect, useReducer } from "react";
import { CartReducer } from "../Reducer/CartReducer";

export const CartContext = createContext()

const cartItemData = () => {
    let newCartData = localStorage.getItem("cartItem")
    if(newCartData === []){
        return []
    }else{
        return JSON.parse(newCartData)
    }
}
const initialState = {
    // cart:[],
    cart: cartItemData() || [],
    total_item:"",
    total_price:"",
}

export const CartProvider = ({children}) => {
 
const [state, dispatch] = useReducer(CartReducer, initialState)

    const addToCart = (amount, product) => {
    dispatch({type: "ADD_TO_CART" , payload:{amount, product}})
    }
    const setIcrement = (id) => {
        dispatch({type: "SET_INCREMENT", payload:id})
    }
    const setDecrement = (id) => {
        dispatch({type: "SET_DECREMENT", payload:id})
    }
    const removeCart = (id) => {
        dispatch({type: "REMOVE_CART_ITEM", payload:id})
    }
const ClearCart = () => {
   dispatch({type: "CLEAR_ALL_CART"})
}
    useEffect(() => {
        dispatch({type: "CART_TOTAL_PRICE"})
        localStorage.setItem("cartItem", JSON.stringify(state.cart))
    }, [state.cart])
    return(
        <CartContext.Provider value={{...state, addToCart, ClearCart ,removeCart, setIcrement, setDecrement}}>{children}</CartContext.Provider>
    )
}
export const useCartContext = () => {
    return useContext(CartContext)
}