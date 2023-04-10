import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className='countdown'>
      <p className='value-p'>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
