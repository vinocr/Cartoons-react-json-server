import React from 'react';

export default class Header extends React.component{
    render(){
        return(
         <header>
        	<div className="container-fluid">
    			<div className="row zsx">
    				<div className="col-lg-12 animated lightSpeedIn">
    					<p className="vcenter">
    					<h1><i className="fa fa-bomb fa-lg"></i>Cartoon Channel</h1>
    					</p>
    				</div>
    			</div>
    		</div>
         </header>
        );
    }
    
}
