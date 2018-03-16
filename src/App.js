import React, { Component } from 'react';
import SkillList from './components/SkillList';
import EducationHistory from './components/EducationHistory'
import { skills, eduList, jobsList } from './data/datasource';
import WorkHistory from './components/WorkHistory';
import logo from './logo.svg';
import './css/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SkillList infoTag={skills} />
        <EducationHistory education={eduList} />
        <WorkHistory works={jobsList} />
      </div>
    );
  }
}

export default App;
