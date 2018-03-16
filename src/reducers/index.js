import { combineReducers } from 'redux';
import ContactsReducer from './contactsReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  contacts: ContactsReducer,
  form : formReducer
});

export default rootReducer;
