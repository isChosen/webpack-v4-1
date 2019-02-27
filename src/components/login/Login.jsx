/* eslint-disable */
/*
 * @Author: Detcx
 * @Date: 2019-01-31 15:11:05
 * @Last Modified by: Detcx
 * @Last Modified time: 2019-02-27 12:21:03
 * @Description: Login Page
 */
import React, { Component } from 'react';
import loginLess from './login.less';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    }
  }

  handleUserNameChange(e) {
    const val = e.target.value;
    this.setState({userName: val});
  }

  handlePasswordChange(e) {
    const val = e.target.value;
    this.setState({password: val});
  }

  handleLogin() {
    const { userName, password } = this.state;
    const { history } = this.props;

    console.log('handleLogin', userName, password);
    if (userName === 'abc' && password === '123') {
      history.replace('/app/home');
    }
  }

  render() {
    return (
      <div className={loginLess.container}>
        用户名： <input onChange={this.handleUserNameChange.bind(this)} type="text" />
        <br />
        密  码： <input onChange={this.handlePasswordChange.bind(this)} type="password" />
        <br />
        <button onClick={this.handleLogin.bind(this)}>登录</button>
      </div>
    );
  }
}

export default Login;
