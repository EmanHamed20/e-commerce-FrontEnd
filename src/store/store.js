import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/adduser'
const store = configureStore({
  reducer: {
    user:userReducer
    
  },
});

export default store;
