import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

export default function (props) {
  console.log(props);
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {/* <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item> */}
      {
        props.location.pathname.split('/').map(path => (
          <Breadcrumb.Item key={path}><Link to={'/' + path}>{path}</Link></Breadcrumb.Item>
        ))
      }
    </Breadcrumb>
  )
}