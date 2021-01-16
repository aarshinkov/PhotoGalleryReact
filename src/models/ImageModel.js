import { Card, Button } from 'react-bootstrap';

const ImageModel = (props) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <Card>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.image}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ImageModel;