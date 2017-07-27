import React from 'react';
import superagent from 'superagent';
import {lightBlue400,indigo400} from 'material-ui/styles/colors';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import AddCartoon from './AddCartoon'; 

/*Directory component for viewing all the cartoons */
export default class CartoonsDirectory extends React.Component {
  constructor() {
    super();
    this.state = {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: false,
        showRowHover: false,
        selectable: true,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: true,
        showCheckboxes: true,
        height: '300px',
        cartoons: []
    }
  }

/*function to use Json-server here*/
  componentDidMount() {
    superagent
      .get('http://eclipseche3.niit-mts.com:33977/cartoons')
      .end((err, res) => {
        this.setState({cartoons:res.body});
      });
  }
  
   /* View all the cartoons*/
   viewDetails(cartoon){
       window.location.replace('https://en.wikipedia.org/wiki/'+cartoon.name);   
  }
 
 /*delete the particular cartoon using id*/
   deletefn(cartoon) {
    superagent
      .del('http://eclipseche3.niit-mts.com:33977/cartoons/'+cartoon.id)
      .end((err, res) => {
         if(err){
             console.log("error");
         }
         const cartoons = this.state.cartoons;
         const index = cartoons.indexOf(cartoon);
         cartoons.splice(index, 1);
         this.setState({cartoons: cartoons});
      });
  }
  
 addCartoon(cartoon){
     
        superagent
        .post('http://eclipseche3.niit-mts.com:33977/cartoons')
        .send(cartoon)

        .end((err,res) => {
            if(err){
                console.log("error");
            }
        });
        
        const cartoons = this.state.cartoons;
            cartoons.push(cartoon);
            this.setState({cartoons: cartoons});
      
   }
  
  /*rendering method */
  render() {
      var header={
          textAlign:'center',
          color:lightBlue400,
          fontSize:'25px',
          textShadow:'1px 1px black'
      }
      
      var row={
          color:indigo400,
          fontSize:'15px',
          textShadow:'1px 1px black'
      }
    
    const tbody = this.state.cartoons.map(cartoon => {
      return (
         <TableRow>
          <TableRowColumn>{cartoon.id}</TableRowColumn>
          <TableRowColumn>{cartoon.name}</TableRowColumn>
          <TableRowColumn>{cartoon.creator}</TableRowColumn>
          <TableRowColumn><button className="btn btn-info" onClick={this.viewDetails.bind(this,cartoon)}>Details</button></TableRowColumn>
          <TableRowColumn><button className="btn btn-danger" onClick={this.deletefn.bind(this,cartoon)}>Delete</button></TableRowColumn>
         </TableRow>
      );
    });

    return (
    <div>
        <div className="row">
            <AddCartoon addCartoon={this.addCartoon.bind(this)}/>
        </div><br />
        <div className="col-lg-8 col-sm-8">
        <Table  height={this.state.height} fixedHeader={this.state.fixedHeader} fixedFooter={this.state.fixedFooter} selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}>
          <TableHeader displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}>
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Cartoons Directory" style={header}>
                Cartoons Directory
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn style={row} tooltip="ID">ID</TableHeaderColumn>
              <TableHeaderColumn style={row} tooltip="Name">Name</TableHeaderColumn>
              <TableHeaderColumn style={row} tooltip="Creator">Creator</TableHeaderColumn>
              <TableHeaderColumn></TableHeaderColumn>
              <TableHeaderColumn></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}>
            {tbody}
          </TableBody>
        </Table>
      </div>
       </div>
    );
  }
}
