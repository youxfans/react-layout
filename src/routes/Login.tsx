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
        const loginResult = await request({
          api: 'auth',
          method: 'POST',
          body: {
            "type": "normal",
            "data": {
              "id": values.username,
              "pwd": values.password
            }
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
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登陆              
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Form.create()(Login);