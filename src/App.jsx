import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "./redux/contactsSlice";
import { setFilter } from "./redux/filtersSlice";

const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleSearch = (searchQuery) => {
    dispatch(setFilter(searchQuery));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
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
