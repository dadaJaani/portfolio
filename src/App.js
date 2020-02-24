import React, { Component } from 'react'
import { HashRouter as Router,Switch, Route, Link } from "react-router-dom";


import './styles/App.css';

import Home from './screens/Home'
import About from './screens/About'
import Projects from './screens/Projects'
import Menu from './components/Menu'

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <Menu /> */}

        <Router>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route component={Home} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App
