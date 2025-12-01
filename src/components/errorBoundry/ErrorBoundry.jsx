import React from "react";

class ErrorBoundry extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info){
    console.error("Error", error)
    console.error(info)
  }

  render() {
    if (this.state.hasError) {
      return <p>Caught an error</p>;
    }
    return this.props.children

  }
}


export default ErrorBoundry