import {CLEAR_TEXT, ENTER_TEXT} from './actions.js';

const reducer = (state={}, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case CLEAR_TEXT:
      newState.text = '';
      return newState;
    case ENTER_TEXT:
      newState.text = action.text;
      return newState;
    default:
      return state;
  }
};

export default reducer;
