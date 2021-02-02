import React from 'react';
import ImageModel from '../models/ImageModel';
// import NumberFormat from 'react-number-format';

import { useSelector } from 'react-redux';

function ImageComponent(props) {

    const images = useSelector(state => state.images);

    // const [imagesCount, setImagesCount] = useState(0);

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
                {/* <h3>Снимки (<NumberFormat value={imagesCount} displayType={'text'}
                    thousandSeparator={" "} isNumericString={true}
                    renderText={value => <>{value}</>} />)</h3> */}
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