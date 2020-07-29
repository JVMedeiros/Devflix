import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';

//Router manager 
import { BrowserRouter, Switch, Route } from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
