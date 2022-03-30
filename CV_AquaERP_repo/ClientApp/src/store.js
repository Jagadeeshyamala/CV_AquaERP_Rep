import { createStore,applyMiddleware } from "redux";
import{composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// I am using mobile data now because power cut and when you call then disconect  ok