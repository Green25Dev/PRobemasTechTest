import { CUSTOMER_REGIST, SET_CURRENCY } from "../types"

const initialState = {
  customers: [],
  currency: 1,
}

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMER_REGIST:
      return {
        ...state,
        customers: action.payload,
      }

    case SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      }

    default:
      return state
  }
}

export default customerReducer
