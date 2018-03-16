import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import { deleteATime } from '../actions/index';
import {Link} from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';


export default class SingleContact extends Component {

    render() {
        const {id, name, email, dispatch} = this.props;

        return (
            <div>
                <Link to={"/contact/" + id}>
                    <List>
                        <ListItem primaryText={this.props.name} secondaryText={this.props.email}
                                  leftIcon={<ActionGrade color={pinkA200}/>}/>
                    </List>
                </Link>
            </div>
        );
    }
}

//export default connect()(SingleContact);



