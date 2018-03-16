import React, { Component , PropTypes} from 'react';

import axios from 'axios';


import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';




const ROOT_URL = './src/data/contacts.js';






export default class App extends Component {



  render() {
    return (
       <MuiThemeProvider>
          <div className="test">{this.props.children}</div> 
     </MuiThemeProvider>
      
    );
  }
}


//{this.props.children} for nested routes
