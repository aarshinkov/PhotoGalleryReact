import React from 'react';
import ImageGridModel from '../models/ImageGridModel';
import ImageListModel from '../models/ImageListModel';
import NumberFormat from 'react-number-format';
import { useSelector, useDispatch } from 'react-redux';
import { setListView } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList } from '@fortawesome/free-solid-svg-icons';

function ImageComponent(props) {

    const response = useSelector(state => state.images);
    const images = response.hits;
    const imagesCount = response.total;

    const isGridView = useSelector(state => state.listView);
    const dispatch = useDispatch();

    const getImages = () => {
        // if (!images.length) {
        //     return <div className="col-12">
        //         <h3>Няма снимки</h3>
        //     </div>
        // }

        let imagesList = [];
        if (typeof images !== 'undefined') {
            imagesList = images.map(image => {
                if (!isGridView) {
                    return <ImageListModel key={image.id} image={image.largeImageURL}
                        views={image.views} favorites={image.favorites} likes={image.likes}
                        downloads={image.downloads} tags={image.tags} username={image.user}
                        userImage={image.userImageURL} pageURL={image.pageURL} userId={image.user_id}
                        user={image.user} />
                } else {
                    return <ImageGridModel key={image.id} image={image.largeImageURL}
                        views={image.views} favorites={image.favorites} likes={image.likes}
                        downloads={image.downloads} tags={image.tags} username={image.user}
                        userImage={image.userImageURL} pageURL={image.pageURL} userId={image.user_id}
                        user={image.user} />
                }
            });
        }
        return imagesList;
    }

    const toggleListView = () => {
        dispatch(setListView(!isGridView));
    }

    const getListIcon = () => {
        if (isGridView) {
            return faList;
        }
        return faTh;
    }

    return (
        <>
            <div className="d-flex">
                <h3>Снимки (<NumberFormat value={imagesCount} displayType={'text'}
                    thousandSeparator={" "} isNumericString={true}
                    renderText={value => <>{value}</>} />)</h3>
                {/* <h3>Снимки</h3> */}
                <h3 className="ml-auto" onClick={toggleListView}>
                    <FontAwesomeIcon icon={getListIcon()} style={{cursor: 'pointer'}} />
                </h3>
            </div>
            <hr />

            <div className="row">
                {getImages()}
            </div>
        </>
    );
}

export default ImageComponent;