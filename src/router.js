import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic'
import routes from './routes/index';

const allRouter = [...routes]

// 递归实现路由的方法
function mapRouteMethod(routeArr, app) {
  return routeArr.map(({ path, children, ...dynamics }, index) => {
    // debugger
      if (children) {
          return <Route key={index} path={path} render={(props) => {
              const Component = dynamic({ app, ...dynamics })
              return (<Component {...props}> {mapRouteMethod(children, app)} </Component>)
          }} />
      }
      return <Route key={index} path={path} exact component={dynamic({ app, ...dynamics })} />
  })
}

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {mapRouteMethod(allRouter, app)}
        {/* {routes.map(({path, ...dynamics } , index) => (
          <Route key={index} path={path} exact component={dynamic({app, ...dynamics})} />

          // <Route path={item.path} exact component={item.component} />
        ))} */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
