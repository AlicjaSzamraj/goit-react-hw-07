import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";

const formatPhoneNumber = (number) => {
  return number.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces")
    .required("Required")
    .min(3, "Too short")
    .max(50, "Too long"),
  phone: yup
    .string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      "Phone number must be in the format 123-456-7890"
    )
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleAddContact = (values) => {
    const formattedValues = {
      ...values,
      phone: formatPhoneNumber(values.phone.replace(/-/g, "")),
    };
    dispatch(addContact(formattedValues));
  };

  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleAddContact(values);
        resetForm();
      }}
    >
      <Form className={styles.contactForm}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <Field className={styles.input} type="text" name="name" />
        <ErrorMessage
          name="name"
          component="div"
          className={styles.errorMessage}
        />

        <label htmlFor="phone">Phone</label>
        <Field className={styles.input} type="text" name="phone" />
        <ErrorMessage
          name="phone"
          component="div"
          className={styles.errorMessage}
        />

        <button className={styles.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
