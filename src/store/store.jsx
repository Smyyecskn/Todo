import { combineReducers, legacy_createStore as createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";

// export const store = createStore(counterReducer);

export const rootReducer = combineReducers({
  counterReducer,
  todoReducer,
});

export const store = createStore(rootReducer);
