import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import SetupPage from './routes/SetupPage';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/setup" exact component={SetupPage} />

      </Switch>
    </Router>
  );
}

export default RouterConfig;
