import { INCREASE, DECREASE } from "./actionTypes";

// Action Creator
export function IncreaseChange() {
  return {
    type: INCREASE,
  };
}

// Action Creator
export function DecreaseChange() {
  return {
    type: DECREASE,
  };
}

export function IncreaseMultiChange() {
  //REDUX MULTI
  return [
    {
      type: INCREASE,
    },
    {
      type: INCREASE,
    },
    {
      type: INCREASE,
    },
  ];
}

export const DecreaseAsyncChange = (numeros: any) => {
  //REDUX-THUNK
  return (dispatch: any) => {
    setTimeout(() => {
      alert("Completed");
      dispatch(DecreaseChange());
    }, 300);
  };
};
