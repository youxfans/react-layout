import React, { Suspense, lazy } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SiderBar from './layout/SiderBar';
import Breadcrumb from './layout/Breadcrumb';

import './App.less';

const { Header, Content, Footer } = Layout;

const Home = lazy(() => import('./routes/Home'));
const Page = lazy(() => import('./routes/Page'));

function App() {
  return (
    <Router basename="/react-layout">
      <Layout style={{ minHeight: '100vh' }}>
        <Route component={({ location }) => <SiderBar location={location} />} />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Route component={({ location }) => <Breadcrumb location={location} />} />
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Suspense fallback={<div>Loading...</div>}>
                <Route exact path="/" component={Home}/>
                <Route path="/page" component={Page}/>
              </Suspense>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>React Layout ©2018 Created by Yousfans</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
