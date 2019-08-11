import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default () => {
  return (
    <Footer className="footer">
      <p>宠益联盟后台系统 ©{new Date().getFullYear()}</p>
    </Footer>
  )
}