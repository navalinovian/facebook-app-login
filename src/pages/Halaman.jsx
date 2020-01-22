import React, { Component } from "react";
import FacebookProvider, {
  Page,
  // EmbeddedPost,
  // SendToMessenger,
  // MessageUs
} from "react-facebook-sdk";

export default class Halaman extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row">
            <FacebookProvider appId="1049503778763466">
              <Page
                href="https://www.facebook.com/101471541370845/videos/622900075181195/"
                tabs="timeline"
                width="500px"
              />
            </FacebookProvider>
          </div>
        </div>
      </div>
    );
  }
}
