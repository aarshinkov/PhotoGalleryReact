import actions from './action-types';
import networkClient from '../network/network-client';

export function setImages(images) {
    return { type: actions.SET_IMAGES, payload: images };
}

export const getImages = params => async dispatch => {
    try {
        const response = await networkClient.get('', params);
        dispatch(setImages(response));
    } catch (error) {
        console.log(error)
    }
}

export function setSelectedLang(year) {
    return { type: actions.SET_SELECTED_LANG, payload: year };
}

export function setSelectedCategory(category) {
    return { type: actions.SET_SELECTED_CATEGORY, payload: category };
}

export function setListView(isListView) {
    return { type: actions.SET_LIST_VIEW, payload: isListView };
}