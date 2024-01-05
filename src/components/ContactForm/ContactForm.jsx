import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNewContact } from '../../redux/contactsSlice';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ name: '', number: '' });
  const { name, number } = state;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addNewContact(state));
    formReset();
  };

  const formReset = () => {
    setState({ name: '', number: '' });
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="">
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={css.label} htmlFor="">
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
