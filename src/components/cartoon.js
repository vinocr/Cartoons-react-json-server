import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'
import Login from './Login';
import Home from './Home';
injectTapEventPlugin();

/*Cartoon component for doing Router operation */
/* FIXME: All react components filenames should start with capital letters */
export default class Cartoon extends React.Component {
 render(){
     return(
        <MuiThemeProvider>
          <Router>
            <div>
              <Route exact path="/" component={Login} />
              <Route path="/home" component={Home} />
            </div>
          </Router>
        </MuiThemeProvider>
    );
 }   
}