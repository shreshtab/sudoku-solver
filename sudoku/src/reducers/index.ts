import { combineReducers } from "redux";

import { gridReducer } from "./gridReducer";
import { IAppState } from "../models/index";

export const rootReducer = combineReducers<IAppState>({
  gridState: gridReducer
});