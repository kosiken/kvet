import {createStore, applyMiddleware, combineReducers} from 'redux';
import {authReducer, bookingReducer} from './reducers';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
  auth: authReducer,
  booking: bookingReducer,
});
const InitialState = {};
const middleware = [thunk];

export default createStore(
  RootReducer,
  InitialState,
  applyMiddleware(...middleware),
);
