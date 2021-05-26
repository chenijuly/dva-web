import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import routes from './routes/index'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {
          routes.map((item) => 
             <Route path={item.path} exact component={item.component} />
          )
        }
        
      </Switch>
    </Router>
  );
}

export default RouterConfig;
