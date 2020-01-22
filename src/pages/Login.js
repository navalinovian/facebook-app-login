import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
// import Home from './Home'


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: null,
      name: null,
      hover: false,
      email: null,
      picture: null
    };
  }

  handleSubmit() {
    localStorage.setItem("id", JSON.stringify(this.state.userId));
    localStorage.setItem("name", JSON.stringify(this.state.name));
    console.log(this.state.userId);
  }

  isHovering = () => {
    this.setState({ hover: !this.state.hover });
    console.log(this.state.hover);
  };

  responseFacebook = response => {
    console.log(response);
    console.log(response.id);
    console.log(response.name);
    
    this.setState({ userId: response.id, name: response.name }, () => this.handleSubmit() );
    return response;


  };

  componentClicked = () => {
    console.log("Clicked");
  };

  render() {
    if (this.state.userId == null) {
      return (
        <div>
          <div class="container-fluid">
            <div class="row">
              <div className="Home-Content" style={styles.mainContent}>
                <div className="isi" style={styles.wrapper}>
                  LOGIN
                </div>
                <div id="fb-root"></div>
                <div
                  className="loginBtn"
                  style={
                    this.state.hover ? styles.loginBtnHover : styles.loginBtn
                  }
                >
                  <h4
                    onMouseOver={this.isHovering}
                    onMouseOut={this.isHovering}
                  >
                    <FacebookLogin
                      appId="1049503778763466"
                      autoLoad={false}
                      fields="name, email, picture"
                      onClick={() => {this.componentClicked()}}
                      callback={this.responseFacebook}
                    />
                  </h4>
                </div>
                <div className="buttonHome"></div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      console.log(this.state.userId);
      return (
        <Redirect
          to="/Home"
        />
      );
    }
  }
}

const styles = {
  wrapper: {
    fontWeight: "bold",
    fontSize: "10rem",
    textShadow:
      "0rem 0.5rem 0rem #EA4C89, 0rem 1rem 0rem #C32360, 0rem 1.5rem 0rem #8E1344",
    color: "#FFFFFF"
  },
  loginBtn: {
    fontSize: "2rem",
    color: "#FFFFFF"
  },
  mainContent: {
    backgroundColor: "#000033",
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white"
  },
  loginBtnHover: {
    fontSize: "2rem",
    color: "#FFFF33"
  }
};
