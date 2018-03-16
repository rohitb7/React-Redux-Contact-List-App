import React from 'react';
import {  expect } from '../test_helper';
import {SAVE_DELETE, SET_INITIAL_LOAD, GET_INITIAL_CONTACTS , 
	GET_CONTACTS , GET_CONTACT ,CREATE_CONTACT , DELETE_CONTACT ,
	 EDIT_CONTACT} from '../../src/actions/index';
import {  getSingleContact , fetchContacts , createContact , deleteAContact , saveDeleteContact , editContact} 
from '../../src/actions/index';
//import * as actions from '../../src/actions/index'; //actions.saveDeleteContact
import axios from 'axios';



describe('actions' , () => {


	describe('GET_CONTACT' , () => {
		it('GET_CONTACT  has a correct type' , () => {
			const action = getSingleContact();  
			expect(action.type).to.equal(GET_CONTACT);
		});
		it('GET_CONTACT  has a correct payload' , () => {
			const action = getSingleContact('id');
			expect(action.payload).to.equal('id');
			//expect(action.payload).to.equal('string');
		});
	});

	describe('GET_CONTACTS' , () => {
		it('GET_CONTACTS  has a correct type' , () => {
			const action = fetchContacts();
			expect(action.type).to.equal(GET_CONTACTS);
		});
		it('GET_CONTACTS  has a correct payload' , () => {
			const action = fetchContacts('id');
			expect(action.payload).to.equal();
		});
	});	


	describe('createContact' , () => {
		let contact = { bar: "test"};
		it('CREATE_CONTACT  has a correct type' , () => {
			const action = createContact(contact);
			expect(action.type).to.equal(CREATE_CONTACT);
		});
		it('CREATE_CONTACT  has a correct payload' , () => {
			const action = createContact(contact);
			expect(action.payload).to.equal(contact);
		});
	});	


	describe('DELETE_CONTACT' , () => {
		let id = 1;
		it('DELETE_CONTACT  has a correct type' , () => {
			const action = deleteAContact(id);
			expect(action.type).to.equal(DELETE_CONTACT);
		});
		it('DELETE_CONTACT  has a correct payload' , () => {
			const action = deleteAContact(id);
			expect(action.payload).to.equal(id);
		});	
	});	



	describe('SAVE_DELETE' , () => {
		let deleteItemId = 1;
		it('SAVE_DELETE  has a correct type' , () => {
			const action = saveDeleteContact(deleteItemId);
			expect(action.type).to.equal(SAVE_DELETE);
		});	
		it('DELETE_CONTACT  has a correct payload' , () => {
			const action = saveDeleteContact(deleteItemId);
			expect(action.payload).to.equal(deleteItemId);
		});	
	});	




	describe('EDIT_CONTACT' , () => {
		let editContactObj = { bar: "test" , id : 1};
		it('EDIT_CONTACT  has a correct type' , () => {
			const action = editContact(editContactObj);
			expect(action.type).to.equal(EDIT_CONTACT);
		});	
		it('EDIT_CONTACT  has a correct payload' , () => {
			const action = editContact(editContactObj);
			expect(action.editContact).to.equal(editContactObj);
			expect(action.id).to.equal(editContactObj.id);
		});	
	});	




	
});

