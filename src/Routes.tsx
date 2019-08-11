import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Spin } from "antd";

const Home = lazy(() => import('./routes/Home'));
const Page = lazy(() => import('./routes/Page'));
const User = lazy(() => import('./routes/User'));
const Mobx = lazy(() => import('./routes/Mobx'));
const Performance = lazy(() => import('./routes/Performance'));
const NoMatch = lazy(() => import('./routes/NoMatch'));

export default () => {
  return (
    <Suspense fallback={<Spin style={{ textAlign: 'center' }}/>}>
      <Switch>
        <Redirect from='/login' to='/' />
        <Route exact path="/" component={Home} />
        <Route path="/page" component={Page} />
        <Route path="/user/:id" component={User} />
        <Route path="/util/mobx" component={Mobx} />
        <Route path="/util/performance" component={Performance} />
        <Route component={NoMatch} />
      </Switch>
    </Suspense>
  )
}