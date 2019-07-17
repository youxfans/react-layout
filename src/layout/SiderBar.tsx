import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { RouteChildrenProps } from 'react-router';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function SiderBar(props: RouteChildrenProps) {
  const path = (props.location.pathname.match(/\/\w+/g) || []).reverse();
  return (
    <Sider collapsible>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['/']} defaultOpenKeys={[path[1]]} selectedKeys={[path[0] || '/']} mode="inline">
        <Menu.Item key="/">
          <Link to="/">
            <Icon type="home" />
            <span>Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/page">
          <Link to="/page">
            <Icon type="desktop" />
            <span>Pgae</span>
          </Link>
        </Menu.Item>
        <SubMenu
          key="/user"
          title={
            <span>
              <Icon type="user" />
              <span>User</span>
            </span>
          }
        >
          <Menu.Item key="/Tom"><Link to="/user/Tom">Tom</Link></Menu.Item>
          <Menu.Item key="/Bill"><Link to="/user/Bill">Bill</Link></Menu.Item>
          <Menu.Item key="/Alex"><Link to="/user/Alex">Alex</Link></Menu.Item>
        </SubMenu>
        <SubMenu
          key="/util"
          title={
            <span>
              <Icon type="team" />
              <span>Util</span>
            </span>
          }
        >
          <Menu.Item key="/mobx"><Link to="/util/mobx">Mobx</Link></Menu.Item>
          <Menu.Item key="/performance"><Link to="/util/performance">Performance</Link></Menu.Item>
        </SubMenu>
        <Menu.Item key="9">
          <Link to="/file">
            <Icon type="file" />
            <span>File</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}