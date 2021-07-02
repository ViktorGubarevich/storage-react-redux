import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import LinkBtn from './components/LinkBtn'
import Home from './components/Home'
import './App.css'

const App = () => (
  <div>
    <header className="header">
      <div className="top-menu">
        <LinkBtn to="/" label={'Главная'} />
        <LinkBtn to="/login" label={'Логин'} />
      </div>
    </header>
    <hr />
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  </div>
)

export default App
