import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let nome = 'A.J.';

  function alterarNome() {
    nome = 'Anderson Marzola';
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
