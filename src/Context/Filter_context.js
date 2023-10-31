import { createContext, useContext, useEffect, useReducer } from "react";
import FilterReducer from "../Reducer/FilterReducer";
import { useProductContext } from "./ProductContext";

const FilterContext = createContext()

const initialState = {
    filter_products:[],
    all_products:[],
    grid_view: true,
}

const FilterContextProvider = ({children}) => {
    const {products} = useProductContext()

    const [state, dispatch] = useReducer(FilterReducer, initialState)

    const setGridView = () => {
        return dispatch({type: "SET_GRID_VIEW"})
    }
    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload:products},[products])
    })
    return(
        <FilterContext.Provider value={{...state}}>{children}</FilterContext.Provider>
    )
}
const useFilterContext = () => {
    return useContext(FilterContext)
}
export {FilterContextProvider, useFilterContext}