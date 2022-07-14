import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import libraryReducer from "./MyLibrarys/mylibrary-reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['mylibrary']
  }


const rootReducer = combineReducers({
    mylibrary: libraryReducer,
  });
  
  export default persistReducer(persistConfig, rootReducer);