import React from 'react';
import { Layout, Button, Avatar } from 'antd';
import { withRouter } from 'react-router';

const { Header } = Layout;

export default withRouter((props) => {
  const handerLogout = () => {
    sessionStorage.clear();
    props.history.push('/login');
  }
  return (
    <Header className='header'>
      <Avatar src={sessionStorage.getItem('avatarUrl') || ''} />
      <span className="nick-name">{sessionStorage.getItem('nickName')}</span>
      <Button icon="logout" className="logout" onClick={handerLogout}>登出</Button>
    </Header>
  )
})