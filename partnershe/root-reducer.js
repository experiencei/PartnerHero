import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['mylibrary']
  }


const rootReducer = combineReducers({
    mylibrary: userReducer,
  });
  
  export default persistReducer(persistConfig, rootReducer);