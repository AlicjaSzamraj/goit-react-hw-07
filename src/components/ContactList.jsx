import React from "react";
import Contact from "./Contact";
import styles from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            contact={contact}
            deleteContact={() => dispatch(deleteContact(contact.id))}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
