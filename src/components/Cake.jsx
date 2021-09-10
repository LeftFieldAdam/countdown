import React from 'react';

function Cake(props) {
  return (
  <div className="pt-10 relative">
    <span className="text-6xl block mb-10">{props.days === 0 && props.hours === 0 && props.min === 0 && props.sec === 0 ? '🎂' : ''}</span>
  </div>
  );
}

export default Cake;