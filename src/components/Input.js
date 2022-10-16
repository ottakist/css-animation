import React from 'react';
import { useGlobalContext } from '../context';

const Input = () => {
  const {
    setBackgroundColor,
    stroke,
    setStroke,
    backgroundColor,
    onImageChange,
  } = useGlobalContext();
  return (
    <div className='input-container'>
      <div className='input-wrapper'>
        <label>
          <input type='file' id='file-input' onChange={onImageChange} />
          select file
        </label>
      </div>
      <div className='input-wrapper'>
        <p>select color:</p>
        <input
          type='color'
          value={stroke}
          onChange={(e) => setStroke(e.target.value)}
          id='color-selector'
        />
      </div>

      <div className='input-wrapper'>
        <p>select background color:</p>
        <input
          type='color'
          value={backgroundColor}
          onChange={(e) => {
            setBackgroundColor(e.target.value);
          }}
          id='background-selector'
        />
      </div>
    </div>
  );
};

export default Input;
