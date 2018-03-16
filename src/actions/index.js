import axios from 'axios';
import uuidV1 from 'uuid/v1';
export const GET_INITIAL_CONTACTS = 'GET_INITIAL_CONTACTS';
export const GET_CONTACTS = 'GET_CONTACTS';
export const GET_CONTACT = 'GET_CONTACT';
export const CREATE_CONTACT = 'CREATE_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const SET_INITIAL_LOAD = 'SET_INITIAL_LOAD';
export const SAVE_DELETE = 'SAVE_DELETE';
export const RESTORE_CONTACT = 'RESTORE_CONTACT';


const ROOT_URL = './src/data/contacts.js';


initalLoaded;

export function initalLoaded() {
    return {
        type: 'SET_INITIAL_LOAD'
    }
}


export function fetchInitialContacts() {
   const request = axios.get(ROOT_URL);
    return (dispatch) => {
    	request.then(({data}) => {
    		dispatch({  type: 'GET_INITIAL_CONTACTS', contactsListPayload: data })
    	});
    }
}


//get contacts 
export function fetchContacts() {
    return {
        type: 'GET_CONTACTS'
    }
}


//getSingleContact
export function getSingleContact(id) {
	//console.log(id);
    return {
    	type: 'GET_CONTACT', 
    	payload : id  
    } 
}

//create a Contact
export function createContact(contact) {
    let contactNew = Object.assign(contact, {id : uuidV1() } );
    return {
        type: 'CREATE_CONTACT',
        payload : contactNew,
    }
}

//delete a Contact
export function deleteAContact(deleteItemId) {
    console.log("deleteItemId  " + deleteItemId);
    return {
        type: 'DELETE_CONTACT',
        payload : deleteItemId
    }
}


//save delete a Contact
export function saveDeleteContact(deleteItemId) {
    console.log("deleteItemId  " + deleteItemId);
    return {
        type: 'SAVE_DELETE',
        payload : deleteItemId
    }
}

//Edit Contact to edit
export function editContact(editContactObj) {
  //  console.log("editContactObj");
   // console.log(editContactObj);
    return {
        type: 'EDIT_CONTACT',
        editContact : editContactObj,
        id: editContactObj.id
    }
}

//Restore deleted object
export function restoreDeletedItem(restoreObj) {
 //   console.log("restoreObj");
   // console.log(restoreObj);
    return {
        type: 'RESTORE_CONTACT',
        payload : restoreObj,
        id:restoreObj.id
    }
}


