import React from 'react';
import './Image.css';

function Image({nasaPic}) {
	return (
    <div>
     <img src={nasaPic} alt='random' className='nasaImg' />
    </div>
  );
}

export default Image;
