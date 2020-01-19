import { createSelector } from "reselect";

export const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);

export const selectDirectoryLoading = createSelector(
  [selectDirectory],
  directory => directory.loading
);
