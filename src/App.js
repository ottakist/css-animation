import React from 'react';

import Input from './components/Input';
import Filter from './components/Filter';


function App() {
  return (
    <>
      <Input />

      <main className='container'>
        <div className='animation'></div>
      </main>
      <Filter />
    </>
  );
}

export default App;
