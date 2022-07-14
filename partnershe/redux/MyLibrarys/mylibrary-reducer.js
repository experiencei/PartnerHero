import MyLibraryTypes from "./mylibrary-type";
import { addMusicToLibrary } from "./mylibrary-utilis";

const INITIAL_STATE = {
    library : []
  };


const libraryReducer = (state = INITIAL_STATE, {type , payload}) => {
    switch (type) {
      case MyLibraryTypes.TOGGLE_REMOVE_MUSIC:
        return {
          ...state,
          library: removeMusicFromLibrary(state.library , payload )
        };
      case MyLibraryTypes.TOGGLE_ADD_MUSIC:
        return {
          ...state,
          library: addMusicToLibrary(state.library , payload )
        };

        default:
            return state;
        }
};


export default libraryReducer