import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Forms from './pages/Forms';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forms" component={Forms} />            
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
