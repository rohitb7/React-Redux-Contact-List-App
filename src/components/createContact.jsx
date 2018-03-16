import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {createContact} from '../actions/index';
import {Field, reduxForm, FieldArray} from 'redux-form' // Field and  FieldArray is version 6 .will not work
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {margin: 20};


class CreateContact extends Component {

    static contextTypes = {router: PropTypes.object};

    onSubmit(props) {
        this.props.createContact(props);
        this.context.router.push('/');
    };

    render() {
        const {pristine, reset, submitting, fields: {name, email, street1, street2, city, state, country, zipCode}, handleSubmit} = this.props;
        return (
            <div className="center">
                <div className="center-item">
                    <h2> Create Contact</h2>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="create-contact">

                        <div>
                            <TextField id="text-field-default" className="create-name" hintText="Name" {...name}
                                       fullWidth={true}/>
                            <div className="text-help"> {name.touched ? name.error : " "} </div>
                        </div>

                        <div>
                            <TextField id="text-field-default" hintText="Email" type="email" {...email}
                                       fullWidth={true}/>
                            <div className="text-help"> {email.touched ? email.error : " "} </div>
                        </div>

                        <div>
                            <TextField id="text-field-default" hintText="Street Add. 1" {...street1} fullWidth={true}/>
                            <div className="text-help"> {street1.touched ? street1.error : " "} </div>
                        </div>

                        <div>
                            <TextField id="text-field-default" hintText="Street Add. 2" {...street2} fullWidth={true}/>
                            <div className="text-help"> {street2.touched ? street2.error : " "} </div>
                        </div>

                        <div>
                            <TextField id="text-field-default" hintText="City" {...city} fullWidth={true}/>
                            <div className="text-help"> {city.touched ? city.error : " "} </div>
                        </div>

                        <div>
                            <TextField id="text-field-default" hintText="State" fullWidth={true} {...state} />
                            <div className="text-help"> {state.touched ? state.error : " "} </div>
                        </div>

                        <div>
                            <TextField id="text-field-default" hintText="Country"   {...country} fullWidth={true}/>
                            <div className="text-help">{country.touched ? country.error : " "}</div>
                        </div>

                        <div>
                            <TextField id="text-field-default" hintText="Zipcode" {...zipCode} fullWidth={true}/>
                            <div className="text-help">{zipCode.touched ? zipCode.error : " "}</div>
                        </div>

                        <RaisedButton label="submit" type="submit" primary={true} style={style}/>
                        <Link to="/"><RaisedButton type="Cancel" label="Cancel" secondary={true}
                                                   className="margin-left"/></Link>
                    </form>
                </div>
            </div>
        );
    }
}


// To Validate all the input // use json instead
function validate(values) {
    const errors = {};
    if (!values.name) {
        errors.name = "Enter a name";
    }
    if (!values.email) {
        errors.email = "Enter a email";
    }
    if (!values.street1) {
        errors.street1 = "Enter a street1";
    }
    if (!values.street2) {
        errors.street2 = "Enter a street2";
    }
    if (!values.city) {
        errors.city = "Enter a city";
    }
    if (!values.state) {
        errors.state = "Enter a state";
    }
    if (!values.country) {
        errors.country = "Enter a country";
    }
    if (!values.zipCode) {
        errors.zipCode = "Enter a zipCode";
    }
    return errors;
}


export default reduxForm({
    form: 'ContactCreateForm',
    fields: ['name', 'email', 'street1', 'street2', 'city', 'state', 'country', 'zipCode'], validate
}, null, {createContact})(CreateContact);



