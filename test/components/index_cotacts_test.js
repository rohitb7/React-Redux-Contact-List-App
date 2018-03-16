/*

import React from 'react';
import { renderComponent , expect } from '../test_helper';
import { mount, shallow } from 'enzyme';
import IndexContact from '../../src/components/indexContacts';
import SingleContact from '../../src/components/singleContact';
import sinon from 'sinon';
import { Link } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';




describe('<IndexContact/>', () => {

	  it('should render 1 <IndexContact /> components', () => {
	    const wrapper = shallow(<IndexContact/>);
	    expect(wrapper.find('IndexContact')).to.have.length(1);
	  });


	  it('calls componentDidMount', () => {
		    const wrapper = mount(<IndexContact/>);
		    expect(IndexContact.prototype.componentDidMount.calledOnce).to.equal(true);
	  });

 
	  it('should render children when passed in', () => {
	    const wrapper = shallow(
	      <SingleContact>
	        <div className="unique" />
	      </SingleContact>
	    );
	    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
	  });


	  it('simulates click events', () => {
	    const onButtonClick = sinon.spy();
	    const wrapper = shallow(
	      <IndexContact onButtonClick={onButtonClick} />
	    );
	    wrapper.find('Link').simulate('click');
	    expect(onButtonClick.calledOnce).to.equal(true);
	  });


});

*/
