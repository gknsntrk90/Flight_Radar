import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./slice/flight";

const rootReducer = {
  flight: flightReducer
}

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});