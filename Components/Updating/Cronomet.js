import React from 'react';

class BuggyComponent extends React.Component {
  render() {
    throw new Error('Erro simulado!');
    return <p>Este texto nunca será exibido.</p>;
  }
}

export default BuggyComponent;
