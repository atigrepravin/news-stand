import { CHANGE_VIEW_AS } from "./actions";

const initialState = {
  viewAs: "icon",
};
const listingView = (state, action) => {
  switch (action.type) {
    case CHANGE_VIEW_AS:
      return action.payload.viewAs;
    default:
      return state;
  }
};

export default (state = initialState, action) => {
  return {
    viewAs: listingView(state.viewAs, action),
  };
};
