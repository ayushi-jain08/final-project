const ProductReducer = (state,action) =>  {
    switch (action.type) {
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true
            }
            case "SET_API_DATA":
                const featureData = action.payload.filter((curElem) => {
                    return curElem.featured === true
                })
                // console.log(featureData)
                return{
                    ...state,
                    isLoading: false,
                    products: action.payload, 
                    featureProducts: featureData,
                }
                case "API_ERROR":
                    return {
                      ...state,
                      isLoading: false,
                      isError: true,
                    };
                    case "SET_SINGLE_LOADING":
                        return{
                            ...state,
                            isSingleLoading:true
                        } 
                    case "SET_SINGLE_PRODUCT":
                        return {
                            ...state,
                            isSingleLoading: false,
                            singleProduct: action.payload,
                      };
                      case "SET_SINGLE_ERROR":
                        return {
                            ...state,
                            isSingleLoading: false,
                           isError: true,
                      };
                      case "ADD_TO_WISHLIST": {

                      const WishExist = state.wishlist.find((item) => item.id === action.payload.id
                      )
                      if(WishExist){
                        alert("item already")
                        return state
                      }
                        return {
                            ...state,
                            wishlist: [...state.wishlist , action.payload],
                           
                      };
           }
           case "REMOVE_WISHLIST":{
            return {
                ...state,
                wishlist: state.wishlist.filter((item) => item.id !== action.payload)
          };

        }
        case "CLEAR_WISHLIST":{
            return {
                ...state,
                wishlist: []
          };
        }
//         case "ADD_TO_CART": {
//             const CartExist = state.cartItem.find((item) => item.id === action.payload.id
//             )
//             if(CartExist){
//               alert("item already")
//               return state
//             }
//               return {
//                   ...state,
//                 cartItem: [...state.cartItem , action.payload],
                 
//             };
//  }

        default:
           return state;
    }
}
export default ProductReducer;