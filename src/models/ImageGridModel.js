import { Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faThumbsUp, faDownload } from '@fortawesome/free-solid-svg-icons';

const ImageGridModel = props => {
    return (
        // <div className="col-12 col-lg-6 col-xl-4 mb-4">
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <Card className="shadow-sm">
                {/* <Card.Img variant="top" src={props.image} target="_blank" /> */}
                <a href={props.pageURL} rel="noreferrer" target="_blank">
                    <Image src={props.image} className="card-img-top" alt="Unknown" />
                </a>
                <Card.Body>
                    {/* <Card.Title>Test</Card.Title> */}
                    <div className="card-text">
                        <div className="mb-2">
                            <FontAwesomeIcon icon={faEye} className="mr-1 text-info"/>
                            <span title="Views">{props.views}</span>
                            <span className="mx-1">&bull;</span>
                            <FontAwesomeIcon icon={faHeart} className="mr-1 text-danger"/>
                            <span title="Favorites">{props.favorites}</span>
                            <span className="mx-1">&bull;</span>
                            <FontAwesomeIcon icon={faThumbsUp} className="mr-1 text-success"/>
                            <span title="Likes">{props.likes}</span>
                            <span className="mx-1">&bull;</span>
                            <FontAwesomeIcon icon={faDownload} className="mr-1 gray-text"/>
                            <span title="Downloads">{props.downloads}</span>
                        </div>
                        <div>
                            <span>{props.tags}</span>
                        </div>
                        <hr />

                        <div className="d-flex justify-content-start">
                            <div>
                                <Image src={props.userImage} roundedCircle className="mr-2"
                                    style={{ height: '50px', width: '50px' }} />
                            </div>
                            <div className="align-self-center g-px-10">
                                <h5 className="h6 font-weight-bold">
                                    <a href={`https://pixabay.com/bg/users/` + props.user + `-` + props.userId}
                                        className="text-dark" rel="noreferrer" target="_blank">{props.username}</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ImageGridModel;