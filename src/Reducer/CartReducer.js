export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let { amount, product } = action.payload;

      let existingCart = state.cart.find(
        (curElem) => curElem.id === product.id
      );

      if (existingCart) {
        let updatedCart = state.cart.map((curElem) => {
          if (curElem.id === product.id) {
            let newAmount = curElem.amount + amount;

            if(newAmount >= curElem.max){
                newAmount = curElem.max
            }
            return {
              ...curElem,
              amount: newAmount,
            };
          } 
          else {
            return curElem;
          }
        });
        return {
          ...state,
          cart: updatedCart,
        };
      }
       else {
        let cartProduct = {
          id: product.id,
          name: product.name,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }
    }
    case "SET_DECREMENT":{
        let updateProduct = state.cart.map((curElem) => {
            if(curElem.id === action.payload){
                let decAmount = curElem.amount - 1

                if(decAmount <= 0){
                    decAmount = 1;
                }

                return{
                    ...curElem,
                    amount:decAmount
                }
            }else{
                return curElem;
            }
        })
        return{
            ...state,
            cart: updateProduct
        }
    }
    case "SET_INCREMENT":{
        let updateProduct = state.cart.map((curElem) => {
            if(curElem.id === action.payload){
                let IncAmount = curElem.amount + 1

                if(IncAmount >= curElem.max){
                    IncAmount = curElem.max;
                }

                return{
                    ...curElem,
                    amount: IncAmount
                }
            }else{
                return curElem;
            }
        })
        return{
            ...state,
            cart: updateProduct
        }
    }
    case "CART_TOTAL_PRICE": {
        let TotalPrice = state.cart.reduce((initialVal, curElem) => {
            let {price, amount} = curElem;
            initialVal = initialVal + price * amount

            return initialVal;
        }, 0)

        return{
            ...state, 
            total_price: TotalPrice
        }
    }
    case "REMOVE_CART_ITEM": {
      let updateCart = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: updateCart,
      };
    }
    case "CLEAR_ALL_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
