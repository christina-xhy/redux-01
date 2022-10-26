import * as actionTypes from "./constants";

const initialState = {
  counter: 100,
};

function reducer(state = initialState, action) {
  //home 和 profile 分别派发action
  switch (action.type) {
    case actionTypes.ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    //先拷贝旧的数据，根据不同的类型jingxing 不同的操作 state 和 action
    case actionTypes.SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}

export default reducer;
