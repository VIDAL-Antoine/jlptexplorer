/* Unused file for now
Example code to have the color and bg color for the circled icon
<CircleIcon className="bi bi-book-fill" color='#006400' bgcolor="#b3ffb3" />
<CircleIcon className="bi bi-translate" color='#007BFF' bgcolor="#b3e0ff" />
<CircleIcon className="bi bi-graph-up-arrow" color='#800080' bgcolor="#d8bfd8" />
<CircleIcon className="bi bi-chat-dots" color='#cc6600' bgcolor="#ffb366" /> 
*/

import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const CircleIcon = ({ className, color, bgcolor }) => {
  const circleStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '40px',
    width: '4rem',
    height: '4rem',
    borderRadius: '50%',
    color: color,
    background: bgcolor,
    margin: '0.5rem',
  };

  return (
    <span style={circleStyle} className={className}></span>
  );
};

export default CircleIcon;
