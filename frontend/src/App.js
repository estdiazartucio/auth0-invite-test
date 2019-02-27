import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './Homepage/Home.js';
import MusicContainer from './MusicDashboard/MusicContainer.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/music' component={MusicContainer} />
            </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
