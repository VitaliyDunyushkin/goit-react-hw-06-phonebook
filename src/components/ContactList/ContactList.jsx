import React from 'react';
// import PropTypes from 'prop-types';

import css from './contactList.module.css';
import ContactItem from '../ContactItem';
import { getContacts } from 'redux/contactsSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function ContactList() {
  const contacts = useSelector(getContacts);

  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };
