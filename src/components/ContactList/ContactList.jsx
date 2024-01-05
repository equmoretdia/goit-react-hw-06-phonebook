import React from 'react';
// import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import ContactItem from '../ContactItem';

import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from '../../redux/selectors';

// const ContactList = ({ contacts, onContactDelete }) => {
const ContactList = ({ onContactDelete }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className={css.wrapper}>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onContactDelete={onContactDelete}
        />
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onContactDelete: PropTypes.func.isRequired,
// };

export default ContactList;
