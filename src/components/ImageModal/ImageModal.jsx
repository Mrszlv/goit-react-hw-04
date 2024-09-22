import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={s.modal}
    >
      {image && (
        <div>
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className={s.img}
          />
          <p className={s.text}>Author: {image.user.name}</p>
          <p className={s.text}>Likes: {image.likes}</p>
          <p className={s.text}>Deskription: {image.alt_description}</p>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
