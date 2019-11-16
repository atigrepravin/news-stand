import { CHANGE_VIEW_AS } from './actions';

const intialState = {
  viewAs: 'icon'
};
const listingView = (state, action) => {
  switch (action.type) {
    case CHANGE_VIEW_AS:
      return action.payload.viewAs;
    default:
      return state;
  }
};

export default (state = intialState, action) => {
  return {
    viewAs: listingView(state.viewAs, action)
  };
};
