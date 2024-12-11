import React from "react";
import Contact from "./Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteContact={() => deleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
