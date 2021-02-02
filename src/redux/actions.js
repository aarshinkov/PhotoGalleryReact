import actions from './action-types';
import networkClient from '../network/network-client';

export function setImages(images) {
    return { type: actions.SET_IMAGES, payload: images };
}

export const getImages = params => async dispatch => {
    try {
        const response = await networkClient.get('', params)
        dispatch(setImages(response.hits));
    } catch (error) {
        console.log(error)
    }
}