import React from 'react';

const SkillBar = ({ skill, level }) => {
  return (
    <div className="skill-bar">
      <span className="skill">{skill}</span>
      <div className="bar-container">
        <div className="bar" style={{ width: level }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
