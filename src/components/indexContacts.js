import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchInitialContacts, fetchContacts, initalLoaded} from '../actions/index';
import SingleContact from './singleContact';
import {Link} from 'react-router';
import CircularProgress from 'material-ui/CircularProgress';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';


export class IndexContacts extends Component {

    //to load when component mount
    componentWillMount() {
        if (this.props.initialLoad === false) {
            this.props.fetchInitialContacts(); //loading from contact list
            this.props.initalLoaded();
        } else {
            this.props.fetchContacts();     //loading from state
        }
    }

    render() {

        // Add new contact button 
        let addNewContact = <div className="center">
            <Link to="/contact/create/new">
                <div className="center-item">
                    <FloatingActionButton secondary={true}>
                        <ContentAdd/>
                    </FloatingActionButton>
                </div>
            </Link>
        </div>;


        //Deleted list button
        let deletedList = <div className="down-center">
            <div>
                <Link to="/contact/deleted/list">
                    <RaisedButton label="Go to Deleted Contacts"/>
                </Link>
            </div>
        </div>;


        let noContactsAvailableLink = <h2 className="down-center"> No Contacts Added </h2>;


        //Contact list when available                      
        let contactAvailable = <div className="center">
            <div className="center-item">
                <List>
                    {addNewContact}
                    {
                        this.props.contacts.map((singleContact) => {
                            return (
                                <div>
                                    <SingleContact key={singleContact.id} {...singleContact}/>
                                </div>
                            )
                        })
                    }
                </List>
            </div>
        </div>;


        //if contact list is not available (props are not set)
        if (!this.props) {
            return <div><CircularProgress/></div>
        }


        //Conditional rendering for 'Contact available or No Contact available'    
        const isContacts = this.props.contacts.length;

        if (isContacts) {
            return <div>
                {contactAvailable}
                <div>{deletedList}</div>
            </div>
        } else {
            return <div className="center">
                <div className="center-item">
                    {noContactsAvailableLink}
                    <div>{addNewContact}</div>
                    <br></br>
                    {deletedList}
                </div>
            </div>
        }

        //Return to render     
        return (
            <div>
                isContacts={isContacts}
            </div>
        );

    }

}


function mapStateToProps(state) {
    return {
        contacts: state.contacts.contactsArray,
        initialLoad: state.contacts.initialLoad,
        deletedContactsArray: state.contacts.deletedContactsArray
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchInitialContacts, fetchContacts, initalLoaded}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContacts);



