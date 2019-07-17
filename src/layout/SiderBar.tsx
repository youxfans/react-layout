import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function SiderBar ({ location } : { location: Location }) {
  return (
    <Sider collapsible>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['/']} selectedKeys={[location.pathname]} mode="inline">
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
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              <span>User</span>
            </span>
          }
        >
          <Menu.Item key="/user/Tom"><Link to="/user/Tom">Tom</Link></Menu.Item>
          <Menu.Item key="/user/Bill"><Link to="/user/Bill">Bill</Link></Menu.Item>
          <Menu.Item key="/user/Alex"><Link to="/user/Alex">Alex</Link></Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="team" />
              <span>Util</span>
            </span>
          }
        >
          <Menu.Item key="/mobx"><Link to="/mobx">Mobx</Link></Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9">
          <Icon type="file" />
          <span>File</span>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}