import { decreaseCounter, increaseCounter } from "../reducers/counter";

export const increaseCount = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "INCREASE_COUNT",
    });
    dispatch(increaseCounter());
  };
};

export const decreaseCount = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "DECREASE_COUNT",
    });
    dispatch(decreaseCounter());
  };
}
