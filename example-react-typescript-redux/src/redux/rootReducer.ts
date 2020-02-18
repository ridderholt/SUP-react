import { combineReducers } from "redux";
import counterReducer, { ICounterState } from '../counter/counter.reducer';

export interface IApplicationState {
    counter: ICounterState
}

export default combineReducers({
    counter: counterReducer
});
