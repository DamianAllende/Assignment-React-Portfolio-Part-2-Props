import React, { Component } from 'react';
import ContainerEducationHistory from './ContainerEducationHistory';

class EducationHistory extends Component{
	render(){
		const history = this.props.education
		//console.log(history)
		return(
			<section>
				<h4>Education</h4>
				<ContainerEducationHistory />
				{history.map(function(list){
					return <ContainerEducationHistory institute={list.institute} field={list.fieldOfStudy} date={list.dates} />
				})}
				
			</section>
			);
	}
}

export default EducationHistory;