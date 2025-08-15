import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PhysicsYear.css'; // Assuming you have a CSS file for styling

const PhysicsYear = ({ header, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="expandable-div">
      <div className="physics-year-header" onClick={toggleExpand}>
        <h2>{header}</h2>
        <span className="arrow">{isExpanded ? '▲' : '▼'}</span>
      </div>
      {isExpanded && (
        <div className="physics-year-content">
          {content}
        </div>
      )}
    </div>
  );
};

PhysicsYear.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default PhysicsYear;