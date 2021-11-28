import React from "react";
import {Carousel} from "react-bootstrap";


export default class CarouselComponent extends React.PureComponent{
  render(){
            return (
              <div>

                <Carousel
              style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              transform:" translateX(0)",
              transform: "translate3d(0, 0, 0)",
              }}
                interval={2300}
                fade="true"
                >
                  <Carousel.Item
                    style={{
                      // height:"100px",
                      transitionDuration: "1.5s",
                      transitionProperty: "opacity",
                    }}>
                    <img
                      // height="200px"
                      className="d-block w-100 carouselImage"
                      src = "https://www.iitr.ac.in/nss/images/banner.jpg"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item
                  style={{
                    transitionDuration: "1.5s",
                    transitionProperty:" opacity",
                  }}>
                    <img
                    // height="100px"
                      className="d-block w-100 carouselImage"
                      src="https://ch.iitr.ac.in/departments/CH/assets/images/top1.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item
                  style={{
                    transitionDuration: "1.5s",
                    transitionProperty: "opacity",
                  }}>
                    <img
                    // height="600px"
                      className="d-block w-100 carouselImage"
                      src={`../home_page_images/SIH.png`}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
            </div>
            );
        }
}
