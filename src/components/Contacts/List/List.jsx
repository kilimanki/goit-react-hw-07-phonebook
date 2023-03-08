import { getContacts } from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contacts-operations';

export const List = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    const result = contacts.filter(item => {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });
    return result;
  };
  const deleteContact = id => {
    dispatch(deleteContacts(id));
  };
  const items = filteredContacts();
  console.log(items);
  const elements = items.map(item => {
    return (
      <li key={item.id}>
        <span>{item.name}:</span>
        <span>{item.phone}</span>
        <button onClick={() => deleteContact(item.id)}>Delete</button>
      </li>
    );
  });

  return <ul>{elements}</ul>;
};
