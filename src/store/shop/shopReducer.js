import collections from "./shopData";

const initialState = {
  collections
};

const shopReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default shopReducer;
