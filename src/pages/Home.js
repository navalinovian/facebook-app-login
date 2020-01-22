import React, { Component } from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";
// import { Helmet } from "react-helmet";
import FacebookProvider, {
  Page,
  EmbeddedPost,
  SendToMessenger,
  MessageUs
} from "react-facebook-sdk";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: null,
      hover: false
    };
  }

  componentWillMount() {
    this.setState(
      { id: localStorage.getItem("id"), name: localStorage.getItem("name") },
      () => console.log(this.state.id)
    );
  }

  logoutFunc = () => {
    this.setState({ id: null });
    // localStorage.removeItem("name");
    localStorage.setItem("id", this.state.id);
  };

  isHovering = () => {
    this.setState({ hover: !this.state.hover });
    console.log(this.state.hover);
  };

  render() {
    console.log("haha");
    if (this.state.id != null) {
      return (
        <div>
          {/* <Helmet>
<script>{
!function(f,b,e,v,n,t,s)
{
  if(f.fbq)return;n=f.fbq=function()
  {
    n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
  };
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '209863870048264');
  fbq('track', 'PageView');
}
  
</script>
<noscript>{<img alt="pixel" height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=209863870048264&ev=PageView&noscript=1"
    />}</noscript>
          </Helmet> */}
          <div class="container-fluid">
            <div class="row">
              <div className="Home-Content" style={styles.mainContent}>
                <div className="isi" style={styles.wrapper}>
                  HOME
                </div>
                <div id="fb-root"></div>
                <div className="loginBtn" style={styles.loginBtn}>
                  <h4>{this.state.id}</h4>
                  <h4>{this.state.name}</h4>
                </div>
                <div className="content">
                  <FacebookProvider appId="1049503778763466">
                    <Page
                      href="https://www.facebook.com/101471541370845/videos/622900075181195/"
                      tabs="timeline"
                    />
                  </FacebookProvider>
                </div>
                <div className="content2">
                  <FacebookProvider>
                    <EmbeddedPost
                      href="https://www.facebook.com/101471541370845/videos/622900075181195/"
                      width="500"
                    />
                  </FacebookProvider>
                </div>
                <div className="share">
                  <FacebookProvider appId="1049503778763466">
                    <SendToMessenger
                      appId="1049503778763466"
                      pageId="101471541370845"
                    />
                  </FacebookProvider>
                </div>
                <div className="messageus">
                  <FacebookProvider appId="1049503778763466">
                    <MessageUs
                      appId="1049503778763466"
                      pageId="101471541370845"
                    />
                  </FacebookProvider>
                </div>
                <div className="button-logout">
                  <div class="row">
                    <h4
                      style={
                        this.state.hover
                          ? styles.loginBtnHover
                          : styles.loginBtn
                      }
                      onMouseOver={this.isHovering}
                      onMouseOut={this.isHovering}
                      onClick={() => this.logoutFunc()}
                    >
                      Logout
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/" />;
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
  loginBtnHover: {
    fontSize: "2rem",
    color: "#FF2F33"
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
  }
};
