import MyLibraryTypes from "./mylibrary-type";

export const addMusic = item => ({
    type: MyLibraryTypes.TOGGLE_ADD_MUSIC,
    payload : item
  });

  export const removeMusic = item => ({
    type: MyLibraryTypes.TOGGLE_REMOVE_MUSIC,
    payload : item
  });