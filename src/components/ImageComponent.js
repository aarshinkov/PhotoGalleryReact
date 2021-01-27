import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ImageModel from '../models/ImageModel';

function ImageComponent(props) {

    const [data, setData] = useState({ hits: [] });

    useEffect(() => {
        async function fetchData() {
            const result = await axios('https://pixabay.com/api/?key=7800072-61da03e5f9a4b085174c2f98f');
            // console.log(result);

            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="d-flex">
                <h3>Images</h3>
                <h3 className="ml-auto">Icons</h3>

            </div>
            <hr />

            <div className="row">
                {
                    data.hits.map(item => (
                        <ImageModel key={item.id} image={item.largeImageURL}
                            views={item.views} favorites={item.favorites} likes={item.likes}
                            downloads={item.downloads} />
                    ))
                }
            </div>
        </>
    );
}

export default ImageComponent;