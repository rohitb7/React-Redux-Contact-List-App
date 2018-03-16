import {bindActionCreators} from 'redux';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {restoreDeletedItem} from '../actions/index';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

const style = {margin: 12};
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import SvgIconFace from 'material-ui/svg-icons/action/face';

import PersonAdd from 'material-ui/svg-icons/social/person-add';

const styles = {chip: {margin: 42, height: 80, width: 150, padding: 2}, wrapper: {display: 'flex', flexWrap: 'wrap',},};


export class DeletedContacts extends Component {


//callback to confirm if contact is to be resotred or not
    restoreDelete(deletedItem) {
        let confirmBox = confirm("Confirm to Restore Contact"); // had to use a model here
        if (confirmBox == true) {
            this.props.restoreDeletedItem(deletedItem);
        }

    }


    render() {

        //Back button
        let backButton = <Link to={"/"}><RaisedButton label="Back to Contacts List" style={style}/></Link>;

        //If any deleted contact (array) available then display it
        let contactAvailable = <div>
            <div className="center">
                <div className="center">
                    <List>
                        {
                            this.props.deletedContactsArray.map((deletedItem) => {
                                return (
                                    <Chip className="center-item" key={deletedItem.id}
                                          onClick={() => this.restoreDelete(deletedItem)}
                                          style={styles.chip}>
                                        <Avatar color="#444" icon={<SvgIconFace/>}
                                        />
                                        <MenuItem leftIcon={<PersonAdd/>}/>
                                        {deletedItem.name}
                                    </Chip>
                                )
                            })
                        }
                    </List>
                </div>
            </div>
            <div className="center">{backButton} </div>
        </div>;


        const isDeleted = this.props.deletedContactsArray.length;

        //Conditional rendering for 'Deleted Contact available or No Deleted Contact available'
        if (isDeleted) {
            return contactAvailable;
        } else {
            return <div className="center">
                <div className="center-item">
                    <h3>No Deleted Contacts</h3>
                    {backButton}
                </div>
            </div>
        }

        return (
            <div>
                isDeleted={isDeleted}
            </div>

        );


    }
}


function mapStateToProps(state) {
    return {deletedContactsArray: state.contacts.deletedContactsArray}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({restoreDeletedItem}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DeletedContacts);
