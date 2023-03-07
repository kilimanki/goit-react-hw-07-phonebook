import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Form.module.css';
import { getContacts } from 'redux/contacts/contacts-selector';
import { addContacts } from 'redux/contacts/contacts-operations';
const INITIAL_STATE = {
  name: '',
  number: '',
};
const Form = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const alreadyAdded = ({ name }) => {
    const dublicate = contacts.find(item => {
      return item.name.toLowerCase() === name.toLowerCase();
    });
    return dublicate;
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = state;
    if (alreadyAdded({ name })) {
      alert(`${name} is already added`);
      return;
    }
    dispatch(addContacts({ name, phone: number }));
    reset();
  };
  const reset = () => {
    setState(INITIAL_STATE);
  };
  const { name, number } = state;
  return (
    <>
      <h3>Phonebook</h3>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.item}>
          Name
          <input
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>

        <label className={css.item}>
          <p>Number</p>
          <input
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>

        <button className={css.btn}>Add contact</button>
      </form>
    </>
  );
};
export default Form;
