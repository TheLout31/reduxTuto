/* eslint-disable prettier/prettier */

import {ADD_TO_CART, REMOVE_CART} from './constants';

const initialState = [];

export const Mainreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];
    case REMOVE_CART:
      let result = state.filter(item => {
        return item.name!=action.data;
      });
      return [...result];
    default:
      return state;
  }
};