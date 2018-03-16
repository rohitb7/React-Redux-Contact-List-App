import {SAVE_DELETE, SET_INITIAL_LOAD, GET_INITIAL_CONTACTS , GET_CONTACTS , 
	GET_CONTACT ,CREATE_CONTACT , DELETE_CONTACT , EDIT_CONTACT , RESTORE_CONTACT} from '../actions/index';

const INITIAL_STATE = { contactsArray : [], singleContact: null , deletedContactsArray : [], 
singleDelete : null , initialLoad : false }; // post: null is a single post

export default function ContactsReducer(state = INITIAL_STATE, action ){

	console.log(action.type);	

	switch(action.type){

	case SET_INITIAL_LOAD:
		return { ...state , initialLoad : true };

	case GET_INITIAL_CONTACTS:
		return { ...state , contactsArray : action.contactsListPayload };

	case GET_CONTACTS:
		return state;

	case GET_CONTACT:
		return { ...state , singleContact:state.contactsArray.filter((contact) => contact.id == action.payload)[0]} ;

	case CREATE_CONTACT:
		return { ...state , contactsArray : [...state.contactsArray , action.payload ] } ;
			
	case SAVE_DELETE:
		 return { ...state, deletedContactsArray: [ ...state.deletedContactsArray , state.contactsArray.filter((contact) => contact.id === action.payload)[0] ] };
        	
	case DELETE_CONTACT:
        return { ...state , contactsArray : state.contactsArray.filter(deleteItem => deleteItem.id !== action.payload) };

    case EDIT_CONTACT:
		return { ...state,  contactsArray: state.contactsArray.map(contact => (contact.id === action.id) ? action.editContact : contact)};

	case RESTORE_CONTACT:
		return { ...state , contactsArray : [...state.contactsArray , action.payload ] , deletedContactsArray : state.deletedContactsArray.filter(restoreObj => restoreObj.id !== action.id) } ; 	 

	default:
		return state;	
	}
}



// use immutabable js 