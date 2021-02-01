import { Card, Image } from 'react-bootstrap';

const ImageModel = (props) => {
    return (
        // <div className="col-12 col-lg-6 col-xl-4 mb-4">
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <Card className="shadow-sm">
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    {/* <Card.Title>Test</Card.Title> */}
                    <div className="card-text">
                        <div className="mb-2">
                            <span title="Views">{props.views}</span>
                            <span className="mx-1">&bull;</span>
                            <span title="Favorites">{props.favorites}</span>
                            <span className="mx-1">&bull;</span>
                            <span title="Likes">{props.likes}</span>
                            <span className="mx-1">&bull;</span>
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
                                    <a href="https://pixabay.com/users/enriquelopezgarre-3764790"
                                        className="text-dark">{props.username}</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ImageModel;