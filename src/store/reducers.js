const intialState = {
  viewAs: 'list'
};
const listingView = (state = intialState.viewAs, action) => {
  return state;
};

export default (state = {}, action) => {
  return {
    viewAs: listingView(state.viewAs, action)
  };
};
