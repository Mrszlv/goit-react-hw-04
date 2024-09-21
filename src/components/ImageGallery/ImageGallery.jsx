import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map((image) => (
        <ImageCard image={image} key={image.id} />
      ))}
    </ul>
  );
};
export default ImageGallery;
