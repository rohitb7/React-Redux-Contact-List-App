import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getSingleContact, deleteAContact, editAContact, saveDeleteContact} from '../actions/index';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

const style = {margin: 12};


class ShowContact extends Component {

    //Will show a single contact 
    componentWillMount() {
        this.props.getSingleContact(this.props.params.id);
    }

    //For routing    
    static contextTypes = {router: PropTypes.object};

    //delete a contact callback
    handleDelete() {
        let confirmBox = confirm("Confirm to Delete"); // had to use a model here
        if (confirmBox == true) {
            this.props.saveDeleteContact(this.props.singleContact.id); // first save deleted contact to restore in future
            this.props.deleteAContact(this.props.singleContact.id); // then delte the contact
            this.context.router.push('/');  // route to index when deleted
        } else {
            x = "You pressed Cancel!";
        }

    }


    render() {

        //when rendering fails or no props available or taking time to load
        if (!this.props.singleContact) {
            return <div className="aligner"><CircularProgress className="aligner-item" size={80} thickness={5}/></div>
        }

        //get paramaters from props
        const {id, name, email, street1, street2, city, state, country, zipCode, dispatch} = this.props.singleContact;

        // Return a block od detailed contact with 'Edit' , 'Delete' and 'Go Back' button
        return (
            <div className="center">
                <div className="center-item">
                    <Card>
                        <CardTitle title={name} subtitle={email}/>
                        <CardText>  {street1}, {street2}, {city}, {state}, {country} - {zipCode} </CardText>
                        <CardActions>
                            <Link to={"/contact/edit/" + id}><RaisedButton label="Edit" primary={true}
                                                                           style={style}/></Link>
                            <RaisedButton label="Delete" secondary={true} style={style}
                                          onClick={() => this.handleDelete()} value="Delete"/>
                            <Link to={"/"}><RaisedButton label="Back to Contacts List" style={style}/></Link>
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {singleContact: state.contacts.singleContact, deletedContactsArray: state.contacts.deletedContactsArray}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getSingleContact, deleteAContact, saveDeleteContact}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowContact);


