import React from 'react';
import { Layout } from 'antd';
import Performance from '../component/Performance';

const { Footer } = Layout;

export default function() {
  return (
    <Footer style={{ background: '#fff', textAlign: 'center' }}>
      <Performance />
      <p>React Layout ©2018 Created by Yousfans</p>
    </Footer>
  )
}