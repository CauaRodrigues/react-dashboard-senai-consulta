import React from 'react';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';
import Consultas from './components/Consultas/Consultas';
import Faturamento from "./components/Faturamento/Faturamento";
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MenuSuperior />
      <div className="App">
        <Switch>
          <Route path="/" exact={true} component={Resumo} />
          <Route path="/consultas" component={Consultas} />
          <Route path="/faturamento" component={Faturamento} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;