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

// function selectedLang(state = 'bg', action) {
//     switch (action.type) {
//         case actions.SET_SELECTED_LANG: {
//             return action.payload;
//         }
//         default:
//             return state;
//     }
// }

// function selectedCategory(state = '', action) {
//     switch (action.type) {
//         case actions.SET_SELECTED_CATEGORY: {
//             return action.payload;
//         }
//         default:
//             return state;
//     }
// }

function selectedFilters(state = {
    selectedLang: 'bg',
    selectedCategory: ''
}, action) {
    switch (action.type) {
        case actions.SET_SELECTED_LANG: {
            return {
                ...state, ...{ selectedLang: action.payload }
            };
        }
        case actions.SET_SELECTED_CATEGORY: {
            return {
                ...state, ...{ selectedCategory: action.payload }
            };
        }
        default:
            return state;
    }
}

function listView(state = [false], action) {
    switch (action.type) {
        case actions.SET_LIST_VIEW: {
            return action.payload;
        }
        default:
            return state;
    }
}

export default combineReducers({ images, selectedFilters, listView });