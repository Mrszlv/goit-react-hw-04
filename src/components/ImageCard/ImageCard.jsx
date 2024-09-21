const ImageCard = ({ image }) => {
  const { urls, alt_description } = image;

  return (
    <li>
      <img src={urls.smal} alt={alt_description} />
    </li>
  );
};

export default ImageCard;
