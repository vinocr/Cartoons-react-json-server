import React from 'react';
import superagent from 'superagent';
import {lightBlue400} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';

export default class AddCartoon extends React.Component {
  constructor() {
    super();
    this.state = {
        id:'',
        name:'',
        creator:'',
        cartoons: []
    }
  }
    // updating id in state
  changeID(event) {
      this.setState ({
          id: event.target.value
      });
  }
  
  // updating name in state  
  changeName(event) {
      this.setState ({
          name: event.target.value
      });
  }
  
  handleAddCartoon(event) {
      event.preventDefault();
      this.props.addCartoon ({ id: this.state.id,
        name:this.state.name,
        creator:this.state.creator
      });
      this.reset();
  }
  reset(){
        this.setState({
       id:'',
       name:'',
       creator:''
    });
    }
  // updating creator in state
  changeCreator(event) {
      this.setState ({
          creator: event.target.value
      });
  }
 
  render() {
       var header={
          color:lightBlue400,
          fontSize:'25px',
          textShadow:'1px 1px black'
      }
      var button={
          color:'white',
          backgroundColor:'#42A5F5'
      }
    return (
      <div className="col-sm-5">
                <h2 style={header}>Add Cartoons</h2>
            <div>
              <TextField value={this.state.id} onChange={this.changeID.bind(this)} hintText="ID" />
              <TextField value={this.state.name} onChange={this.changeName.bind(this)} hintText="Name" />
              <TextField value={this.state.creator} onChange={this.changeCreator.bind(this)} hintText="Creator" /><br />
              <button style={button} className="btn btn-default" onClick={this.handleAddCartoon.bind(this)}>AddCartoon</button>
              </div>
            </div>);
        }
    }


          