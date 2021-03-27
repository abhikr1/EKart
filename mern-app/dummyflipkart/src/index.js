import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import ProductLists from './pages/ProductLists/ProductLists';


function App() {
  return (
      <Router>
          <Switch>
          <Route exact path="/products/category/:cartegoryname" component={ProductLists} />
              <Route exact path='/'  component={HomePage} />
          </Switch>
      </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);