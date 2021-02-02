import React, { useState, useEffect } from 'react';
import ImageModel from '../models/ImageModel';
import NumberFormat from 'react-number-format';
import networkClient from '../network/network-client';

function ImageComponent(props) {

    const [images, setImages] = useState([]);
    const [imagesCount, setImagesCount] = useState(0);

    const loadImages = () => {
        networkClient.get('', {},
            response => {
                setImages(response.hits);
                setImagesCount(response.total);
            },
            error => {
                console.log(error);
            });
        // axios.get(`${constants.baseUrl}?key=${constants.apiKey}&id=5937499`)
        //     .then((response) => {
        //         console.log(response.data.hits[0]);
        //         setImageTags(response.data.hits[0].tags);
        //     });
    }

    useEffect(() => {
        loadImages();
    }, []);

    const getImages = () => {
        const imagesList = images.map(image => {
            return <ImageModel key={image.id} image={image.largeImageURL}
                views={image.views} favorites={image.favorites} likes={image.likes}
                downloads={image.downloads} tags={image.tags} username={image.user}
                userImage={image.userImageURL} />
        });
        return imagesList;
    }

    return (
        <>
            <div className="d-flex">
                <h3>Снимки (<NumberFormat value={imagesCount} displayType={'text'}
                    thousandSeparator={" "} isNumericString={true}
                    renderText={value => <>{value}</>} />)</h3>
                <h3 className="ml-auto">Икони</h3>
            </div>
            <hr />

            <div className="row">
                {getImages()}
            </div>
        </>
    );
}

export default ImageComponent;