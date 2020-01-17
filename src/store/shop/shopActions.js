import * as actions from "./shopTypes";

export const updateCollectionsStart = () => ({
  type: actions.UPDATE_COLLECTIONS_START
});

export const updateCollectionsEnd = () => ({
  type: actions.UPDATE_COLLECTIONS_END
});

export const updateCollections = payload => dispatch => {
  dispatch({ type: actions.UPDATE_COLLECTIONS, payload });
};
