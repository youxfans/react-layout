import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Spin } from "antd";

const Home = lazy(() => import('./routes/Home'));
const Page = lazy(() => import('./routes/Page'));
const User = lazy(() => import('./routes/User'));
const Mobx = lazy(() => import('./routes/Mobx'));

export default function () {
  return (
    <Suspense fallback={<Spin style={{ textAlign: 'center' }}/>}>
      <Route exact path="/" component={Home} />
      <Route path="/page" component={Page} />
      <Route path="/user/:id" component={User} />
      <Route path="/mobx" component={Mobx} />
    </Suspense>
  )
}