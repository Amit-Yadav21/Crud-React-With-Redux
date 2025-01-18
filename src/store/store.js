import { configureStore } from "@reduxjs/toolkit"
import CrudReducer from '../redux/crudSlice';

export const store = configureStore({
  reducer: {
    crud: CrudReducer, // CrudReducer
  }
})

export default store;