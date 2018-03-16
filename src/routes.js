import React from 'react';
import { Route , IndexRoute } from 'react-router';
import App from './components/app';
import IndexContacts from './components/indexContacts';
import ShowContact from './components/showContact';
import CreateContact from './components/createContact';
import EditContact from './components/editContact';
import DeletedContacts from './components/deletedContacts';
import NotFound from './components/notFound';



export default (
<Route path="/" component={App} >
	<IndexRoute component={IndexContacts}/>
	<Route path="contact/:id" component={ShowContact} />
	<Route path="contact/create/new" component={CreateContact} />
	<Route path="contact/edit/:id" component={EditContact} />
	<Route path="contact/deleted/list" component={DeletedContacts} />
	<Route path="*" component={NotFound} />
</Route>
);

