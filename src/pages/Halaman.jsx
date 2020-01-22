import React, { Component } from "react";
// import Button from 'react-bootstrap/Button';
export default class Halaman extends Component {
  loadFacebookLoginApi() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: "1049503778763466",
        cookie: true,
        xfbml: true,
        version: "v5.0"
      });

      window.FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  testAPI() {
    console.log("Welcome!  Fetching your information.... ");
    window.FB.api("/me", function(response) {
      console.log("Successful login for: " + response.name);
      // document.getElementById('status').innerHTML =
      //   'Thanks for logging in, ' + response.name + '!';
    });
  }

  statusChangeCallback(response) {
    console.log("statusChangeCallback");
    console.log(response);
    if (response.status === "connected") {
      this.testAPI();
    } else if (response.status === "not_authorized") {
      console.log("Please log into this app.");
    } else {
      console.log("Please log into this facebook.");
    }
  }

  checkLoginState() {
    window.FB.getLoginStatus(
      function(response) {
        this.statusChangeCallback(response);
      }.bind(this)
    );
  }

  handleFBLogin() {
    window.FB.login(this.checkLoginState());
  }
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row">
          <a href="/home" onClick={this.handleClick}>Login</a>
          </div>
        </div>
      </div>
    );
  }
}
