/* eslint-disable guard-for-in */
/*
 * @Author: liangchaoshun
 * @Date: 2019-01-31 15:11:05
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-21 14:47:37
 * @Description: Login Page
 */
import React, { Component } from 'react';
import {
  Form, Icon, Input, Button, Checkbox
} from 'antd';
import axios from 'axios'; // '__Utils__/http';
import login from './login.less';
import compileCode from './compileCode';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }

  componentDidMount() {
    // console.log('login props: ', this.props);
    this.initForm();
  }

  // 初始化表单账号密码
  initForm() {
    let loginForm = window.localStorage.getItem('login_form');
    loginForm = loginForm ? JSON.parse(loginForm) : '';
    const obj = this.props;

    if (loginForm) {
      obj.form.setFieldsValue({
        username: compileCode.uncompile(loginForm.username),
        password: compileCode.uncompile(loginForm.password)
      });
    }

    if (obj.form.getFieldValue('password')) {
      this.setState({ checked: true });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const obj = this.props;
    obj.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        // this.submitLogin(values);

        const { username, password } = values;
        // eslint-disable-next-line react/prop-types
        const { history } = this.props;
        if (username === 'het' && password === '123') history.replace('/app');
      }
    });
  }

  // 提交用户密码
  submitLogin(form) {
    axios.post(
      '/v1/web/sleepAccount/common/sleep/login4Hotel',
      form
    )
      .then(result => {
        console.log('girls result: ', result);
      })
      .catch(reason => {
        console.log('girls reason:', reason);
      });
  }

  // 记住密码
  rememberCode(e) {
    const { checked } = e.target;
    const obj = this.props;
    const username = obj.form.getFieldValue('username');
    const password = obj.form.getFieldValue('password');
    console.log(checked);
    if (checked) {
      const loginForm = {
        username: compileCode.compile(username),
        password: compileCode.compile(password)
      };
      window.localStorage.setItem('login_form', JSON.stringify(loginForm));
    } else {
      window.localStorage.removeItem('login_form');
    }
    this.setState({ checked });
  }

  render() {
    const thisProps = this.props;
    const { getFieldDecorator } = thisProps.form;
    const { checked } = this.state;
    return (
      <div className={login.bg}>
        <div className={login.container}>
          <div className={login.logoTitle}>
            <div className={login.logo} />
            <h1 className={login.title}>智能酒店管理系统</h1>
          </div>
          <div className={login.formContainer}>
            <div className={login.formTitle}>登录</div>
            <div className={login.itemContainer}>
              <Form
                onSubmit={e => this.handleSubmit(e)}
                className="login-form"
              >
                <Form.Item className={login.formItem}>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: '用户名不能为空!' }]
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="账户"
                    />
                  )}
                </Form.Item>
                <Form.Item className={login.formItem}>
                  {getFieldDecorator('password', {
                    rules: [
                      { required: true, message: '请输入密码!' },
                      { pattern: /^\S+$/, message: '密码不能包含空格符号!' }
                    ]
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="密码"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  <Checkbox
                    checked={checked}
                    className={login.remember}
                    onChange={e => this.rememberCode(e)}
                  >
                    记住密码 (在公共场所建议不要使用此功能)
                  </Checkbox>
                  <Button type="primary" block htmlType="submit" className="login-form-button">
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form.create()(Login);
