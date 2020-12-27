type COUNTER_ACTION_TYPE =
  | {type: 'INCREMENT'}
  | {type: 'DECREMENT'};

const counterReducer = (state = 0, action: COUNTER_ACTION_TYPE) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
export default counterReducer;