import React, { Component } from 'react';

class TagSkill extends Component{
	render(){
		return <span className="skills-list__single">{this.props.tag}</span>	
	}
}

export default TagSkill;
