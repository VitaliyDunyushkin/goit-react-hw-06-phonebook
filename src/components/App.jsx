import React from 'react';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
export function App() {
  //
  //
  // useEffect(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   savedContacts && setContacts(JSON.parse(savedContacts));
  // }, []);

  // const isFirstRender = useRef(true);

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return;
  //   }
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <hr />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
