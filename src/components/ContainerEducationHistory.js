import React, { Component } from 'react';


class ContainerEducationHistory extends Component{
	render(){
		return(
			<div className="degree-list">
			    <div className="degree">
			      <h5 className="degree__institute">{this.props.institute}</h5>
			      <p className="degree__field">{this.props.field}</p>
			      <p className="degree__dates">{this.props.date}</p>
			    </div>
			</div>
		);
	}
}

export default ContainerEducationHistory;
