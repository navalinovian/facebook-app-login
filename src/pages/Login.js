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

  loadFacebookLoginApi(){
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '1049503778763466',
        cookie     : true,
        xfbml      : true,
        version    : 'v5.0'
      });
        
      window.FB.AppEvents.logPageView();   
        
    };
  
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    window.FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    // document.getElementById('status').innerHTML =
    //   'Thanks for logging in, ' + response.name + '!';
    });
  }

  statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      this.testAPI();
    } else if (response.status === 'not_authorized') {
        console.log("Please log into this app.");
    } else {
        console.log("Please log into this facebook.");
    }
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
