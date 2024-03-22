import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  usernumber: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  username: "",
  usernumber: "",
};

const ContactForm = ({ onAddContact }) => {
  const userNameId = useId();
  const userNumberId = useId();

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={userNameId}>
          Name
        </label>
        <Field
          className={css.input}
          type="text"
          name="username"
          id={userNameId}
        ></Field>
        <ErrorMessage component="span" name="username" />
        <label className={css.label} htmlFor={userNumberId}>
          Number
        </label>
        <Field
          className={css.input}
          type="text"
          name="usernumber"
          id={userNumberId}
        ></Field>
        <ErrorMessage component="span" name="usernumber" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
