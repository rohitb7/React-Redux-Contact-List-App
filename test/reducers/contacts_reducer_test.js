import {  expect } from '../test_helper';
import uuidV1 from 'uuid/v1';
import {SAVE_DELETE, SET_INITIAL_LOAD, GET_INITIAL_CONTACTS , 
	GET_CONTACTS , GET_CONTACT ,CREATE_CONTACT , DELETE_CONTACT ,
	 EDIT_CONTACT} from '../../src/actions/index';

import contactsReducer from '../../src/reducers/contactsReducer';
import axios from 'axios';
import * as actions from '../../src/actions/index';

import df from 'deep-freeze-strict';




const ROOT_URL = './src/data/contacts.js';

//const INITIAL_STATE = { contactsArray : [], singleContact: null , deletedContactsArray : [], singleDelete : null , initialLoad : false }; // post: null is a single post


describe('Contacts Reducers' , () => {

				describe('CREATE_CONTACT', () => {
		  			it('CREATE_CONTACT : should create an action to add a contact', () => {
				    		 let contact = { foo: 'bar' };
				    		 let contactNew = Object.assign(contact, {id : uuidV1() } );
				    		 let action = {
						     		 		type: 'CREATE_CONTACT',
						      		 		payload : contactNew
					    				};
			   	    	expect(actions.createContact(contact)).to.deep.equal( action );
			  		});

			  		it('CREATE_CONTACT : should Add a contact ', () => {
					  	 let contact = { foo: 'bar' };
					     let contactNew = Object.assign(contact, {id : uuidV1() } );
					    		 let action = {
							     		 		type: 'CREATE_CONTACT',
							      		 		payload : contactNew
						    				  };
					     let res = contactsReducer(df([]), df(action.payload));
					     expect(res.length).to.equal(1);
					     expect(res[0]).to.equal(action.payload);	
					});
				});

	

		  		describe('GET_CONTACTS', () => {
		  			it('GET_CONTACTS : should get all contacts', () => {
				    		 let action = {
					     		 		type: 'GET_CONTACTS'
					    			};
			   	    	expect(actions.fetchContacts()).to.deep.equal( action );
			  		});

		  		});

		  		
	  			describe('GET_CONTACT', () => {
		  			it('GET_CONTACTS : should get a single contact', () => {
		  					 let id = 1;
				    		 let action = {
							    	type: 'GET_CONTACT', 
							    	payload : id  
							    };
			   	    	expect(actions.getSingleContact(id)).to.deep.equal( action );
			  		});

				});


				describe('DELETE_CONTACT', () => {
		  			it('DELETE_CONTACT : should delete single contact', () => {
		  					 let deleteItemId = 1;
				    		 let action = {
							    	type: 'DELETE_CONTACT', 
							    	payload : deleteItemId
							    };
			   	    	expect(actions.deleteAContact(deleteItemId)).to.deep.equal( action );
			  		});
				});


				describe('EDIT_CONTACT', () => {
		  			it('EDIT_CONTACT : should edit a contact', () => {
		  					 let id = 1;
		  					 let editContactObj = {	 foo: 'bar' };
				    		 let action = {
							    	type: 'EDIT_CONTACT', 
							    	editContact : editContactObj,
							    	id: editContactObj.id
							    };
			   	    	expect(actions.editContact(editContactObj)).to.deep.equal( action );
			  		});
				})


				//testing axios
				// for thunk 
				// intitil load



});







// 


//const INITIAL_STATE = { contactsArray : [], singleContact: null , deletedContactsArray : [], singleDelete : null , initialLoad : false };















