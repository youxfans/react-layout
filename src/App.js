import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SiderBar from './layout/SiderBar';
// import Breadcrumb from './layout/Breadcrumb';
import Routes from './Routes';

import './App.less';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router basename="/react-layout">
      <Layout style={{ minHeight: '100vh' }}>
        <Route component={(props) => <SiderBar {...props} />} />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '16px' }}>
            {/* <Route component={(props) => <Breadcrumb {...props} />} /> */}
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Routes />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>React Layout ©2018 Created by Yousfans</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
