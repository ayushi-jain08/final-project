import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer";



const AppContext = createContext()

const API = "https://api.pujakaitem.com/api/products";

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("wishitem");
    if (localCartData === []) {
      return [];
    } else {
      return JSON.parse(localCartData);
    }
  };
  
const initialState = {
    isLoading:false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading : false,
    singleProduct: {},
    wishlist:getLocalCartData() || [],
    cartItem:[]
}

const AppContextProvider = ({children}) => {
   
    const [state, dispatch] = useReducer(reducer, initialState)
 
    const addToWishList = (item) => {
     dispatch({type:"ADD_TO_WISHLIST", payload:item})
    }
    const removeWishList = (id) => {
        dispatch({type:"REMOVE_WISHLIST", payload:id})
    }
    const clearWishList = () => {
      return  dispatch({type:"CLEAR_WISHLIST"})
    }
    // const addToCart = (item) => {
    //     dispatch({type: "ADD_TO_CART", payload:item})
    // }
  useEffect(() => {
     const wish = state.wishlist
    localStorage.setItem("wishitem",JSON.stringify( wish))
  }, [state.wishlist])

  
    const getProducts = async (url) => {
        dispatch({type: "SET_LOADING"})
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({type: "SET_API_DATA", payload:products})
            // console.log(products)
        } catch (error) {
            dispatch({type: "API_ERROR"})
        }
    }

    const getSingleProduct = async (url) => {
        dispatch({type:"SET_SINGLE_LOADING"})
        try {
            const res = await axios.get(url)
            const singleProducts = await res.data
            dispatch({type:"SET_SINGLE_PRODUCT", payload:singleProducts})
        } catch (error) {
            dispatch({type: "SET_SINGLE_ERROR"})
            
        }
    }
    useEffect(() => {
        getProducts(API)
    },[])

    return(
<AppContext.Provider value={{...state, wishlist:state.wishlist, getSingleProduct, addToWishList, removeWishList, clearWishList}}>{children}</AppContext.Provider>
    )
}
const useProductContext = () => {
    return useContext(AppContext)
}
export {AppContextProvider, useProductContext}