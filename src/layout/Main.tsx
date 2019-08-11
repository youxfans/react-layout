import React from 'react';
import { Route, Redirect } from 'react-router';
import { Layout } from 'antd';
import SiderBar from './SiderBar';
import Header from './Header';
import Footer from './Footer';
import Routes from '../Routes';
import Login from '../routes/Login';
import './layout.less';

const { Content } = Layout;

export default () => {
  const isLogged = sessionStorage.getItem("token");
  if (isLogged) {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SiderBar />
        <Layout>
          <Header />
          <Content style={{ margin: '16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Routes />
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    )
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </Layout>
  )
}