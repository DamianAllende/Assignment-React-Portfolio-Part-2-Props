import React, { Component } from 'react';
import TagSkill from './TagSkill';
class SkillList extends Component{
	render(){
		//console.log(this.props.infoTag)
		const tags = this.props.infoTag

		return(
			<section>
			  <h4>Skills</h4>
			  <div className="skills-list">
			    
			    {tags.map(function(items){
			    	return <TagSkill tag={items} />
			    })}
			  </div>
			</section>
			);
	}
}

export default SkillList;


