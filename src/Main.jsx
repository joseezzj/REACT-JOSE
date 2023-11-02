import React from 'react';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </div>
  );
}

export default App;
