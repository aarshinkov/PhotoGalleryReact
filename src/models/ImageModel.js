import { Card } from 'react-bootstrap';

const ImageModel = (props) => {
    return (
        <div className="col-12 col-lg-6 col-xl-4 mb-4">
            <Card className="shadow-sm">
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    {/* <Card.Title>Test</Card.Title> */}
                    <Card.Text>
                        <span title="Views">{props.views}</span>
                        <span className="mx-1">&bull;</span>
                        <span title="Favorites">{props.favorites}</span>
                        <span className="mx-1">&bull;</span>
                        <span title="Likes">{props.likes}</span>
                        <span className="mx-1">&bull;</span>
                        <span title="Downloads">{props.downloads}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ImageModel;