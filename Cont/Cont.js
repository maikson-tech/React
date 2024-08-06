import React from 'react';
import Contador from './components/Contador';

function App() {
  return (
    <div>
      <h1>Contadores</h1>
      <Contador inicial={0} />
      <Contador inicial={10} />
    </div>
  );
}

export default App;
