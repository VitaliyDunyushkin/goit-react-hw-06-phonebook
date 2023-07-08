import React from 'react';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

import css from './contactItem.module.css';

export default function ContactItem({ id, name, number, onClick }) {
  const dispatch = useDispatch();

  return (
    <li>
      {name}: {number}{' '}
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}

// ContactItem.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
