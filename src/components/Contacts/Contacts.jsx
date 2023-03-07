import { useDispatch } from 'react-redux';
import Form from './Form/Form';
import { List } from './List/List';
import { useEffect } from 'react';

import { Input } from './Input/Input';
import { fetchContacts } from 'redux/contacts/contacts-operations';

import css from './Contacts.module.css';
const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Form />
      <h2 className={css.title}>Contacts</h2>
      <div className={css.block}>
        <Input />
        <List />
      </div>
    </>
  );
};
export default Contacts;
