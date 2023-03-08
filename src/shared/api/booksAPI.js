import axios from 'axios';
const contactsInstance = axios.create({
  baseURL: 'https://6407259b862956433e65bac1.mockapi.io/api/contacts/contacts',
});
export const getAllContacts = () => contactsInstance.get();
export const addContacts = data => {
  return contactsInstance.post('', data);
};
export const deleteContacts = id => {
  contactsInstance.delete(`/${id}`);
};
