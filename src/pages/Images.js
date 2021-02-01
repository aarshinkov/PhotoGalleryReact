import React from 'react';
import Filter from '../components/FilterComponent';
import ImageComponent from '../components/ImageComponent';

function Images() {

    // const getImages = () => {
    //     const imagesList = imagesArray.map(image => {
    //         return <ImageModel
    //             key={image.id}
    //             image={image.image}
    //         />
    //     })
    //     return imagesList;
    // }

    return (
        <>
            {/* <div className="col-12 col-sm-5 col-md-4 col-lg-3 col-xl-2 mb-4"> */}
            <div className="col-12 col-md-4 col-lg-3 col-xl-2 mb-4">
                <Filter />
            </div>
            <div className="col-12 col-md-8 col-lg-9 col-xl-10">
                <ImageComponent />
            </div>
        </>
    );
}

export default Images;