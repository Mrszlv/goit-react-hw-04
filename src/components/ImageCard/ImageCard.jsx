const ImageCard = ({ image }) => {
  const { urls, alt_description } = image;

  return (
    <li>
      <div>
        <img src={urls.smal} alt={alt_description} />
      </div>
    </li>
  );
};

export default ImageCard;
