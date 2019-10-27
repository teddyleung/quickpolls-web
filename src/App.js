import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Poll from './components/Poll';
import PollNew from './components/PollNew';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/new'>
          <PollNew />
        </Route>
        <Route exact path='/polls'>
          <Poll />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
