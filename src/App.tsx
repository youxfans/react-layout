import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SiderBar from './layout/SiderBar';
import Footer from './layout/Footer';
import Routes from './Routes';

import './App.less';

const { Header, Content } = Layout;

function App() {
  return (
    <Router basename="/react-layout">
      <Layout style={{ minHeight: '100vh' }}>
        <Route component={(location: Location) => <SiderBar {...location} />} />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Routes />
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Router>
  );

}

export default App;
