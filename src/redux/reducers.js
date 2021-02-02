import actions from './action-types';
import { combineReducers } from 'redux';

function images(state = [], action) {
    switch (action.type) {
        case actions.SET_IMAGES: {
            // return [...action.payload];
            return action.payload;
        }
        default:
            return state;
    }
}

export default combineReducers({ images });