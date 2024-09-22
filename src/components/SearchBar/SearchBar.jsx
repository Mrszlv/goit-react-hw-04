import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { MdAddPhotoAlternate } from "react-icons/md";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    const query = values.query;
    if (query === "") {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(query);
    resetForm();
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <MdAddPhotoAlternate className={s.icon} />
        <h2 className={s.title}>GALLERY</h2>
      </div>

      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter search photo and image..."
            className={s.input}
          />
          <button type="submit" className={s.btn}>
            Search
          </button>
        </Form>
      </Formik>
      <Toaster />
    </header>
  );
};

export default SearchBar;
