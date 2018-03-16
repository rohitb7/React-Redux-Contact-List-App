import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';


export class NotFound extends Component {

    static contextTypes = {router: PropTypes.object};

    componentWillMount() {
        this.context.router.push('/'); //upon unmatch will redirect to index route
    }

    render() {
        return (
            <div>No Matched routes</div>
        );
    }
}

export default connect(
    null,
    null
)(NotFound);


