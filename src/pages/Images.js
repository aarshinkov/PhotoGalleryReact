import ImageModel from "../models/ImageModel";

function Images(props) {

    const images = [
        { id: 233, image: 'https://cdn.pixabay.com/photo/2021/01/05/11/19/bled-5890874_960_720.jpg' },
        { id: 234, image: 'https://cdn.pixabay.com/photo/2021/01/04/10/30/tree-5887086_960_720.jpg' }
    ];

    const getImages = () => {
        const imagesList = images.map(image => {
            return <ImageModel
                key={image.id}
                image={image.image}
            />
        })
        return imagesList;
    }

    return (
        <div className="container">
            <div className="row">
                {getImages()}
            </div>
        </div>
    );
}

export default Images;