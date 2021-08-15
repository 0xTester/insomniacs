import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";

const reducers = history =>
  combineReducers({
    router: connectRouter(history),
  });

export default reducers;
