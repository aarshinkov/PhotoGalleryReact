import { Image } from 'react-bootstrap';

const ImageListModel = props => {
    return (
        // <div className="col-12 col-lg-6 col-xl-4 mb-4">
        <div className="col-12 col-xl-6 mb-4">
            <div className="d-flex">
                <a href={props.pageURL} rel="noreferrer" target="_blank">
                    <Image src={props.image} className="mr-4" alt="Unknown" width="200" />
                </a>
                <div className="flex-grow-1">
                    <div className="mb-2">
                        <span>{props.tags}</span>
                    </div>
                    <div>
                        <i className="far fa-eye text-info" title="Views"></i>
                        <span title="Views">{props.views}</span>
                        <span>&bull;</span>
                        <i className="fas fa-heart text-danger" title="Favorites"></i>
                        <span title="Favorites">{props.favorites}</span>
                        <span>&bull;</span>
                        <i className="far fa-thumbs-up text-success" title="Likes"></i>
                        <span title="Likes">{props.likes}</span>
                        <span>&bull;</span>
                        <i className="fas fa-download grey-text" title="Downloads"></i>
                        <span title="Downloads">{props.downloads}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-start">
                        <div>
                            <Image src={props.userImage} roundedCircle className="mr-2" style={{ height: '40px', width: '40px' }} />
                        </div>
                        <div className="align-self-center g-px-10">
                            <h5 className="h6 font-weight-bold">
                                <a id="author-name" href={`https://pixabay.com/bg/users/` + props.user + `-` + props.userId}
                                    className="text-dark" rel="noreferrer" target="_blank">{props.username}</a>
                            </h5>
                            {/* <p className="m-0">Text</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default ImageListModel;