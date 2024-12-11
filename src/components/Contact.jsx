import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <div className={styles.contactName}>
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
          <span>{contact.name}</span>
        </div>
        <div className={styles.contactNumber}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <span>{contact.phone}</span>
        </div>
      </div>
      <button className={styles.deleteButton} onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
