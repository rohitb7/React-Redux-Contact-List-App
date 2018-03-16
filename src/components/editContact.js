import React, {Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {  Field, reduxForm ,FieldArray } from 'redux-form' // this is for laterst version we are using  old version
import { Link } from 'react-router';
import { getSingleContact ,editContact} from '../actions/index';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
const style = { margin: 20 };



/*
const { DOM: { input, select, textarea } } = React
This is Redux-form V6 and will not work for older version. Hence 
*/
//This is a older version 
class EditContact extends Component {


	componentWillMount() {
        	this.props.getSingleContact(this.props.params.id); // get single contact with params is
    }

    static contextTypes = { router : PropTypes.object };
    
    //next time be careful before using redux-form and confirm the version
    // since old version Field , FieldArray is not available 
    // grab inputs make an object and send
    onSubmit(props){
				let editedContact = {
					id: this.props.singleContact.id,
					name: this.refs.name.getValue(),
					email: this.refs.email.getValue(),
					street1: this.refs.street1.getValue(),
					street2: this.refs.street2.getValue(),
					city: this.refs.city.getValue(),
					state: this.refs.state.getValue(),
					country: this.refs.country.getValue(),
					zipCode: this.refs.zipCode.getValue(),
				};
				this.props.editContact(editedContact); // upon edit redirect to it
				this.context.router.push('/contact/' + this.props.params.id);
	};	




render() {
	if(!this.props){
		return <div><CircularProgress size={80} thickness={5}/></div>
	}
	const {  name, email ,street1 , street2, city, state, country, zipCode , id } = this.props.singleContact;
	const { handleSubmit } = this.props; 
		return(

			<div className="center">
			 <div className="center-item">
			 <h2> Edit Contact</h2>
			<form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }> 
      			<div>
					<TextField id="text-field-default" ref="name"   hintText="Name" {...name} defaultValue = {name || text} fullWidth={true}  required/>
					<div className="text-help">
						{ name.touched ? name.error : " " }
					</div>
				</div>

				<div>
					<TextField id="text-field-default" type= "email" ref="email" hintText="Email" defaultValue = {email || text} fullWidth={true}  required />
					<div className="text-help">
						{ email.touched ? email.error : " " }
					</div>
				</div>

				<div>
					<TextField id="text-field-default" ref="street1" hintText="Street Add. 1" defaultValue = {street1 || text} fullWidth={true}  required />
					<div className="text-help"> { street1.touched ? street1.error : " " } </div>
				</div>

				<div>
					<TextField id="text-field-default" ref="street2" hintText="Street Add. 2" defaultValue = {street2 || text} fullWidth={true}  required />
					<div className="text-help">
						{ street2.touched ? street2.error : " " }
					</div>
				</div>

				<div>
					<TextField id="text-field-default" ref="city" hintText="City" defaultValue = {city || text} fullWidth={true}   required/>
					<div className="text-help">
						{ city.touched ? city.error : " " }
					</div>
				</div>

				<div>
					<TextField id="text-field-default" ref="state" hintText="State" defaultValue = {state || text} fullWidth={true}  required/>
					<div className="text-help">
						{ state.touched ? state.error : " " }
					</div>
				</div>

				<div>
					<TextField id="text-field-default" ref="country" hintText="Country" defaultValue = {country || text} fullWidth={true} required/>
					<div className="text-help">
						{ country.touched ? country.error : " " }
					</div>
				</div>

				<div>
					<TextField id="text-field-default" ref="zipCode" hintText="Zipcode" defaultValue = {zipCode || text} fullWidth={true}  required/>
					<div className="text-help">
						{ zipCode.touched ? zipCode.error : " " }
					</div>
				</div>

				<RaisedButton type="submit" primary={true}  label="Confirm Edit" style={style} />

				<Link to={"/"}><RaisedButton label="Back to Contact" className="aligner" style={style} /></Link>
 
			</form>
			</div>  
         </div>

		);
	}


}



function mapStateToProps(state) {
    return {singleContact: state.contacts.singleContact}
}
export default reduxForm({ form : 'EditContact',
fields : ['name' ,'email' ,'street1' ,'street2' ,'city' , 'state', 'country', 'zipCode'] } 
, mapStateToProps, { getSingleContact  ,editContact  })(EditContact);
	

/* old version problem be carefull next time and check redux-form version before using it
// 
function validate(values){
	const errors = {};
	if (!values.name) {  errors.name = "Enter a name"; }
	if (!values.email) {  errors.email = "Enter a email"; }
    if (!values.street1) { errors.street1 = "Enter a street1"; }
    if (!values.street2) { errors.street2 = "Enter a street2";   }
    if (!values.city) {  errors.city = "Enter a city"; }
    if (!values.state) {  errors.state = "Enter a state"; }
    if (!values.country) { errors.country = "Enter a country";  }
    if (!values.zipCode) { errors.zipCode = "Enter a zipCode";  }
	return errors;
}
*/

