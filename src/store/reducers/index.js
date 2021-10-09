import { combineReducers } from 'redux';
import AccountReducer from './account.reducer';

const reducers = combineReducers({
    account: AccountReducer,
});

export default reducers;