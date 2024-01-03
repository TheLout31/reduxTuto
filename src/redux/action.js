/* eslint-disable prettier/prettier */
import {ADD_TO_CART} from './constants';
import {REMOVE_CART} from './constants';

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}
export function RemoveFromCart(item) {
  return {
    type: REMOVE_CART,
    data: item,
  };
}
