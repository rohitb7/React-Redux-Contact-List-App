import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createContact} from '../actions/index';
import {Link} from 'react-router';


/// V5 is older version and is 
class ContactCreateV5 extends Component {


    static contextTypes = {
        router: PropTypes.object
    };


    onSubmit(props) {
        this.props.createContact(props)
            .then(() => {
                //blog post has been created so navigate the user to the index
                //we navigate by calling this.context.props.push with the new path to navigate to
                this.context.router.push('/');
            });
    };


    render() {
        const {fields: {name, email, street1, street2, city, state, country, zipCode}, handleSubmit} = this.props;


        return (

            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                <h3>Create a new Contact</h3>

                <div className={`form-control-label ${name.touched && name.invalid ? 'has-danger' : ''}`}>
                    <label>name</label>
                    <input type="text" className="form-control" {...name}/>
                    <div className="text-help">
                        {name.touched ? name.error : " "}
                    </div>
                </div>

                <div className={`form-control-label ${email.touched && email.invalid ? 'has-danger' : ''}`}>
                    <label>email</label>
                    <input type="text" className="form-control" {...email}/>
                    <div className="text-help">
                        {email.touched ? email.error : " "}
                    </div>
                </div>

                <div className={`form-control-label ${street1.touched && street1.invalid ? 'has-danger' : ''}`}>
                    <label>street1</label>
                    <textarea type="text" className="form-control" {...street1}/>
                    <div className="text-help">
                        {street1.touched ? street1.error : " "}
                    </div>
                </div>

                <div className={`form-control-label ${street2.touched && street2.invalid ? 'has-danger' : ''}`}>
                    <label>street2</label>
                    <textarea type="text" className="form-control" {...street2}/>
                    <div className="text-help">
                        {street2.touched ? street2.error : " "}
                    </div>
                </div>

                <div className={`form-control-label ${city.touched && city.invalid ? 'has-danger' : ''}`}>
                    <label>city</label>
                    <textarea type="text" className="form-control" {...city}/>
                    <div className="text-help">
                        {city.touched ? city.error : " "}
                    </div>
                </div>

                <div className={`form-control-label ${state.touched && state.invalid ? 'has-danger' : ''}`}>
                    <label>state</label>
                    <textarea type="text" className="form-control" {...state}/>
                    <div className="text-help">
                        {state.touched ? state.error : " "}
                    </div>
                </div>

                <div className={`form-control-label ${country.touched && country.invalid ? 'has-danger' : ''}`}>
                    <label>country</label>
                    <textarea type="text" className="form-control" {...country}/>
                    <div className="text-help">
                        {country.touched ? country.error : " "}
                    </div>
                </div>

                <div className={`form-control-label ${zipCode.touched && zipCode.invalid ? 'has-danger' : ''}`}>
                    <label>zipCode</label>
                    <textarea type="text" className="form-control" {...zipCode}/>
                    <div className="text-help">
                        {zipCode.touched ? zipCode.error : " "}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>

            </form>
        );
    }

}

function validate(values) {

    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title";
    }

    if (!values.categories) {
        errors.categories = "Enter a category";
    }

    if (!values.content) {
        errors.content = "Enter a content";
    }

    return errors;
}

//connect 1st arg is mapStateTpProps, 2nd is mapDispatchToProps
//reduxForm 1st arg is config, 2nd is  mapStateTpProps, 3rd is mapDispatchToProps


export default reduxForm({
    form: 'CreateNewContact',
    fields: ["name", "email", "street1", "street2", "city", "state", "country", "zipCode"], validate
}, null, {createContact})(ContactCreateV5);

