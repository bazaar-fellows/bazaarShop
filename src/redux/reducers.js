let initialState = {
  cart: [],
  colorTheme: 'light'
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "UPDATECART":
      return { ...state, cart: [...state.cart, payload] };


    case "CLEARCART":
      console.log('inside clear cart');
      return { ...state, cart: [] };


    case "CHANGECOLORTHEME":
      return ({ ...state, colorTheme: payload.color })

    case "DELETE_CART_ITEM":
      let newCartState = state.cart.filter(item => {
        return item.id !== action.payload
      })
      return { ...state, cart: newCartState }

    default:
      return state;
  }
};

