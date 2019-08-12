import React, { FormEvent } from 'react';
import { Button, Form, Input, Icon, Card, message} from 'antd';
import { RouteComponentProps } from 'react-router';
import { FormComponentProps } from 'antd/lib/form';
import request from '../util/request';
import "./login.less";

function Login(props: RouteComponentProps & FormComponentProps) {
  const { getFieldDecorator, validateFields } = props.form;
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    validateFields(async (err, values) => {
      if (!err) {
        const loginResult = await request('auth', 'POST', {
          "type": "normal",
          "data": {
            "id": values.username,
            "pwd": values.password
          }
        });
        if (loginResult.auth && loginResult.auth.token && loginResult.info.role === 'admin') {
          sessionStorage.setItem("token", loginResult.auth.token);
          sessionStorage.setItem("avatarUrl", loginResult.info.avatarUrl);
          sessionStorage.setItem("nickName", loginResult.info.nickName);
          props.history.push('/');
        } else {
          message.error('账号密码 / 权限错误')
        }
      }
    });
  }
  return (
    <div className="login-page">
      <Card>
        <h1>宠益联盟后台系统</h1>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Form.create()(Login);