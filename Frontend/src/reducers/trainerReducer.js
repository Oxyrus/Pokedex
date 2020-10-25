import { REGISTER_TRAINER } from "../actions";

const initialState = {
  hasBeenRegistered: false,
};

export const trainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_TRAINER:
      return {
        ...state,
        hasBeenRegistered: true,
      };
    default:
      return state;
  }
};
