import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { IApplicationState } from '../redux/rootReducer';
import { ICounterState } from './counter.reducer';
import { increment, decrement } from './counter.actions';

interface ICounterStateProps {
    value: number;
}

const valueSelector = createSelector<IApplicationState, ICounterState, ICounterStateProps>(
    state => state.counter,
    counterState => ({ value: counterState.value })
);

const Counter: React.FC = () => {
    const { value } = useSelector(valueSelector);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Current value: {value}</h2>
            <div>
                <div>
                    <button onClick={() => dispatch(increment())}>Increment</button>
                </div>
                <div>
                    <button onClick={() => dispatch(decrement())}>Decrement</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;