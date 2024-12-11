import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import { nanoid } from "nanoid";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { setFilter } from "./redux/filtersSlice";

const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleAddContact = (newContact) => {
    dispatch(addContact({ ...newContact, id: nanoid() }));
  };

  const handleSearch = (searchQuery) => {
    dispatch(setFilter(searchQuery));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox handleSearch={handleSearch} />
      <ContactList
        contacts={getFilteredContacts()}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
