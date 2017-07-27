import React from 'react';
import CartoonsDirectory from './CartoonsDirectory';

export default class Home extends React.Component{
    render(){
        var headstyle={
            textAlign:'center',
            color:'#1E88E5',
            textShadow:'1px 1px black',
            fontStyle:'italic',
            fontFamily:'Kaushan Script'
        }
        return(
        <div>
        <h1 style={headstyle}>Cartoons Channel</h1>
            <CartoonsDirectory />
        </div>
        );
    }
}
