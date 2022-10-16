import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [stroke, setStroke] = useState('#eafd18');
  const [backgroundColor, setBackgroundColor] = useState('#ed1c09');
  const [image, setImage] = useState(null);
  useEffect(() => {
    const r = document.querySelector(':root');
    r.style.setProperty('--svg-color', stroke);
    r.style.setProperty('--background-color', backgroundColor);
  }, [stroke, backgroundColor]);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  var potrace = require('potrace');
  useEffect(() => {
    potrace.trace(
      image || '../data/Pikachu-Pokemon-Transparent-PNG.png',
      function (err, svg) {
        const div = document.querySelector('.animation');

        const imgBlock = document.createElement('img');
        imgBlock.src = `${
          image || '../data/Pikachu-Pokemon-Transparent-PNG.png'
        }`;
        if (div.childElementCount > 1) {
          div.innerHTML = '';
        }
        div.insertAdjacentHTML('afterbegin', svg);
        div.append(imgBlock);

        div.firstChild.id = 'svg';
        div.lastChild.id = 'svg_overlay';
        console.log(image);
      }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);
  return (
    <AppContext.Provider
      value={{
        setBackgroundColor,
        stroke,
        setStroke,
        backgroundColor,
        onImageChange,
        image,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
