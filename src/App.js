import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom";


import './styles/App.css';

import Home from './screens/Home'
import About from './screens/About'
import Projects from './screens/Projects'
import Menu from './components/Menu'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Menu />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route component={Home} />
        </Switch>

      </div>
    );
  }
}

export default App
