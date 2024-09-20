import Modal from "react-modal";

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;
  const { urls, alt_description, user, likes } = image;

  return (
    <Modal isOpen={isOpen} onClose={onClose} ariaHideApp={false}>
      <div>
        <img src={urls.regular} alt={alt_description} />
        <p>Author: {user.name}</p>
        <p>Likes: {likes}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
