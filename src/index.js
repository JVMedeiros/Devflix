import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';

//Assets
import Undefined from './assets/img/page404.jpg';
import styled from 'styled-components';

//Router manager 
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/categoria';
import CadastroVideo from './pages/cadastro/video';

const Main = styled.main`
  flex: 1;
  padding-top: 5%;
  padding-left: 15%;
  padding-right: 15%;
  padding-bottom: 5%;
`;


function Pagina404() {
  return (
    <>
      <Main>
        <img src={Undefined} alt="pagina404"/>
      </Main>
    </>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
