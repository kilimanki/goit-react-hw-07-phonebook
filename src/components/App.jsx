import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Contacts from './Contacts/Contacts';
import { store } from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Contacts />
      </BrowserRouter>
    </Provider>
  );
};
