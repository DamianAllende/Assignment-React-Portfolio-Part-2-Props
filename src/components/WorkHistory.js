import React, { Component } from 'react';
import ContainerWorkHistory from './ContainerWorkHistory';


class WorkHistory extends Component{
	render(){
		const works = this.props.works
		//console.log(works)
		return(
			<section>
			    <h4>Work Experience</h4>
			    {works.map(function(items){
			    	return <ContainerWorkHistory title={items.title} company={items.company} description={items.description} start={items.years.start} end={items.years.end} />
			    })}
			</section>
			);
	}
}

export default WorkHistory;



