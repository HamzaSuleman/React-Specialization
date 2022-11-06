import { createStore } from "redux";
import {Reducer, initialState} from "./reducer";

const store = createStore(
    Reducer,
    initialState
    );

export default store;
