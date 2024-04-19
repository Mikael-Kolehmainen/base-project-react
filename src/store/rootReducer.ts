import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import exampleSlice from "./example/exampleSlice";

const persistConfig = {
  key: "root",
  storage,
};

export const rootReducer = combineReducers({
  example: persistReducer(persistConfig, exampleSlice),
  exampleNonPersistent: exampleSlice,
});
