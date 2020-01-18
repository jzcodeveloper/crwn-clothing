import sections from "./directoryData";

const initialState = {
  sections
};

const directoryReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default directoryReducer;
