import React, { Component, useState } from 'react';
import './App.css';

class App extends Component {
  render() {

  const [nome, setNome] = useState('A.J.');

  function alterarNome() {
    setNome('Anderson Marzola');
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1>{nome}</h1>
          <button onClick={alterarNome}>Exibir Nome Completo</button>
        </header>
      </div>
    );
  }
}

export default App;
