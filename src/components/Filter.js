import React from 'react';

const Filter = () => {
  return (
    <svg>
      <defs>
        <filter id='wavy'>
          <feTurbulence
            x='-25'
            y='-25'
            baseFrequency='0.05'
            numOctaves='5'
            seed='2'
          ></feTurbulence>
          <animate
            attributeName='baseFrequency'
            dur='60s'
            values='0.02;0.005;0.02'
            repeatCount='indefinite'
          ></animate>
          <feDisplacementMap in='SourceGraphic' scale='10'></feDisplacementMap>
        </filter>
      </defs>
    </svg>
  );
};

export default Filter;
