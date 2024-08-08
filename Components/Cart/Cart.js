import React from 'react';
import CartaoDeContato from './components/CartaoDeContato';

function App() {
  return (
    <div>
      <h1>Contatos</h1>
      <CartaoDeContato nome="" email="ana@example.com" telefone="1234-5678" />
      <CartaoDeContato nome="Carlos" email="carlos@example.com" telefone="9876-5432" />
    
    
    </div>
    
  );
}

export default App;
