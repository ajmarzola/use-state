import React, { Component, useState } from 'react';
import './App.css';

class App extends Component {  
  render() {
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [endereco, setEndereco] = useState({});
    const [enderecos, setEnderecos] = useState([]);

    function manipularEndereco(evento) {
      const entrada = evento.target.value;
      
      if (entrada.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then(resposta => resposta.json())
          .then(dados => {
            setEndereco({cep: dados.cep, rua: dados.logradouro, bairro: dados.bairro, cidade: dados.localidade, estado: dados.uf});
            setCep(dados.cep);
            setRua(dados.logradouro);
            setBairro(dados.bairro);
            setCidade(dados.localidade);
            setEstado(dados.uf);
            setEnderecos([...enderecos, endereco]);
          });

      }
    }  

    return (
      <div className="App">
        <header className="App-header">
          <input placeholder='Digite o CEP' onChange={manipularEndereco} />
          <ul>
            <li>CEP: {cep}</li>
            <li>Rua: {rua}</li>
            <li>Bairro: {bairro}</li>
            <li>Cidade: {cidade}</li>
            <li>Estado: {estado}</li>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;