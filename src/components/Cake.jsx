import React from 'react';

function Cake(props) {
  return (
  <div className='pt-10 relative'>
    <span className='text-6xl block mb-10'>{props.isBirthday === true ? '🎂' : ''}</span>
  </div>
  );
}

export default Cake;