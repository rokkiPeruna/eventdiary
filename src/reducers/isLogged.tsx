type LOGGED_ACTION_TYPE =
  | {type: 'SIGN_IN'};

const loggedReducer = (state = false, action: LOGGED_ACTION_TYPE) => {
  switch(action.type) {
    case 'SIGN_IN':
      return !state;
    default:
      return state;
  }
};
export default loggedReducer;