import React, { Component } from "react";
import styled from "styled-components";

import NotFound from "./NotFound";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) return <NotFound />;

    return this.props.children;
  }
}

export default ErrorBoundary;
