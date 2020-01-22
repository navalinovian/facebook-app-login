import React, { Component } from "react";
import { FacebookProvider, Like } from "react-facebook-sdk";

export default class Sukai extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div class="container-fluid">
            <div class="row">
              <article>
                <h5>Judul LoremIpsum</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus, reprehenderit a fuga tempore similique molestiae
                  error neque, suscipit rem minus ea? In beatae expedita cum,
                  molestias aperiam modi aspernatur debitis. Lorem, ipsum dolor
                  sit amet consectetur adipisicing elit. Sit aperiam saepe
                  necessitatibus ratione doloribus incidunt esse pariatur quos
                  deserunt eveniet quae, tempora alias corporis itaque ipsam,
                  quisquam, aspernatur eius totam! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Deleniti, expedita. Delectus
                  autem voluptas, cupiditate rem vitae magni totam. Sint, velit
                  nam? Doloribus ipsum tenetur cum veritatis eius, maxime
                  eligendi enim. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aperiam cum esse perferendis libero veniam
                  adipisci tenetur id unde, deleniti sint, culpa illo nesciunt
                  deserunt! Vero esse quas magni. Perspiciatis, possimus? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Magnam
                  fugit ea reprehenderit cupiditate perferendis veniam
                  dignissimos quasi cum nostrum voluptatum at voluptas aliquam,
                  sequi ex nihil voluptates quis rerum officiis.
                </p>
                <FacebookProvider appId="1049503778763466">
                  <Like
                    href="https://www.facebook.com/101471541370845/videos/622900075181195/"
                    colorScheme="dark"
                    showFaces
                    share
                  />
                </FacebookProvider>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
