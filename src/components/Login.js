import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {lightBlue100,lightBlue400} from 'material-ui/styles/colors';
import {Link} from 'react-router-dom';


/*stylesheet for Paper component */
const styles = {
  paper: {
    width: '70%',
    height: '400px',
    margin: '70px 140px',
    textAlign: 'center',
    padding: '20px',
    backgroundColor:lightBlue100

  }
};

/*Login component*/
export default class Login extends React.Component {
 
  render() {
      var style={
          color:lightBlue400
      }
    return (
      <Paper style={styles.paper}>
        <h1 style={style}>Welcome to Cartoons Channel</h1>
         <Link to="/home"><RaisedButton label="Login" primary={true} /></Link>
      </Paper>
    );
  }
}
