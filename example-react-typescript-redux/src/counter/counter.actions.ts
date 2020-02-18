import { actions } from './counter.reducer';

export const increment = () => ({ type: actions.increment });

export const decrement = () => ({ type: actions.decrement });