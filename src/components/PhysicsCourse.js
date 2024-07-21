import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/PhysicsCourse.css'; // Assuming you have a CSS file for styling

const PhysicsCourse = ({ header, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="expandable-div-course">
      <div className="physics-course-header" onClick={toggleExpand}>
        <h2>{header}</h2>
        <span className="arrow">{isExpanded ? '▲' : '▼'}</span>
      </div>
      {isExpanded && (
        <div className="physics-course-content">
          {content}
        </div>
      )}
    </div>
  );
};

PhysicsCourse.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default PhysicsCourse;