import { Action } from "redux";


export interface ICounterState {
    value: number;
}

const initialState: ICounterState = {
    value: 0
};

export const actions = {
    increment: 'COUNTER/INCREMENT',
    decrement: 'COUNTER/DECREMENT'
};

const counterReducer = (state = initialState, action: Action<string>) => {
    switch (action.type) {
        case actions.increment:
            return {
                ...state,
                value: state.value + 1
            };
        case actions.decrement:
            return {
                ...state,
                value: state.value - 1
            }
        default:
            return state;
    }
};

export default counterReducer;