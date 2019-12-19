import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const logger = store => next => action => {
  console.log('[Middleware] Dispatching', action);
  const result = next(action);
  console.log('[Middleware] Current state', store.getState());
  return result;
}

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
