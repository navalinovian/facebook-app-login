import React, { Component } from "react";
import AppContext from "./AppContext";

export default class AppProvider extends Component {
  state = {
    isTicked: false
  };

  setTicked = isTicked => {
    this.setState({ isTicked });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          isTicked: this.state.isTicked,

          setTicked: this.setTicked
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
