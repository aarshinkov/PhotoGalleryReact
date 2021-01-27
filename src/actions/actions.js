import networkClient from '../network/network-client';

export function setImages(images){
    return {payload: images};
}

export const getImages = params => async dispatch => {
    try {
        const response = await networkClient.get(
            '',
            params,
        )
        dispatch(setImages(response.results));
    } catch (error) {
        console.log(error)
    }
}