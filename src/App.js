import React, { Component } from 'react'

import './styles/App.css';

import Home from './screens/Home'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Home />
          
            {/* <Route exact path="/" component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route component={Home} /> */}
          

      </div>
    );
  }
}

export default App
