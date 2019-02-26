/*
 * @Author: liangchaoshun
 * @Date: 2019-01-31 15:04:24
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-22 15:00:50
 * @Description: ErrorBoundary
 */

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError: ', error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  /* componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  } */

  render() {
    const { hasError } = this.state;
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
