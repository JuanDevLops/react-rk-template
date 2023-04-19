import { INCREASE, DECREASE } from "../Actions/ActionTypes";

const initialState = {
  value: 0,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREASE:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
}
