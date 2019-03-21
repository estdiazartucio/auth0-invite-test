import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './Homepage/Home.js';
import MusicContainer from './MusicDashboard/MusicContainer.js';
import UserPageContainer from './UserPage/UserPageContainer.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/music' component={MusicContainer} />
                <Route exact path='/users' component={UserPageContainer} />
            </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
