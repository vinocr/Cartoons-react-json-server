/*import React from 'react';
import superagent from 'superagent';

export default class Signup extends React.Component{
    
    componentDidMount() {
    superagent
      .post('http://eclipseche3.niit-mts.com:33976/data')
      .end((err, res) => {
        console.log("user and password created");
      });
  }
  
  
  
  
  
  
   login(){
      superagent
      .get('http://eclipseche3.niit-mts.com:33976/data')
      .end((err,res) => {
            if(err){
                console.log("error");
            }
            else
            {
                 res.json({responseText:'authenticated'});
            }
        });
  }
}*/