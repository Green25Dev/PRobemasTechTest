import { SET_CURRENCY } from "../types"

export const storeCurrency = (currency) => ({
  type: SET_CURRENCY,
  payload: currency,
})
