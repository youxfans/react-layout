import React from 'react';
import { Breadcrumb as BreadcrumbCompoment } from 'antd';
import { Link } from 'react-router-dom';

export default function Breadcrumb (props) {
  return (
    <BreadcrumbCompoment style={{ margin: '16px 0' }}>
      <BreadcrumbCompoment.Item><Link to='/'>Home</Link></BreadcrumbCompoment.Item>
      <BreadcrumbCompoment.Item>Bill</BreadcrumbCompoment.Item>
    </BreadcrumbCompoment>
  )
}