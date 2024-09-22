import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";

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
    <header>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <Toaster />
    </header>
  );
};

export default SearchBar;
