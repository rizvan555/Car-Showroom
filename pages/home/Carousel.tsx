import React, { Component, Dispatch, SetStateAction } from 'react';
import Slider from 'react-slick';

interface PropsCarousel {
  dots: boolean;
  infinite: boolean;
  speed: Number;
  slidesToShow: Number;
  slidesToScroll: Number;
  autoplay: boolean;
  autoplaySpeed: Number;
  arrows: boolean;
  light: boolean;
  setLight: Dispatch<SetStateAction<boolean>>;
}

export default class SimpleSlider extends Component<PropsCarousel> {
  render() {
    const { light, setLight } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      light: light,
      setLight: setLight,
    } as PropsCarousel;
    return (
      <div>
        {light ? (
          <div className=" text-white text-3xl pt-[10vh] tracking-wider mx-auto text-center">
            <Slider {...settings}>
              <div className="">
                <h3>WELCOME TO OUR CAR SHOWROOM-1</h3>
              </div>
              <div>
                <h3>WELCOME TO OUR CAR SHOWROOM-2</h3>
              </div>
              <div>
                <h3>WELCOME TO OUR CAR SHOWROOM-3</h3>
              </div>
              <div>
                <h3>WELCOME TO OUR CAR SHOWROOM-4</h3>
              </div>
            </Slider>
          </div>
        ) : (
          <div className=" text-black text-3xl pt-[10vh] tracking-wider mx-auto text-center">
            <Slider {...settings}>
              <div className="">
                <h3>WELCOME TO OUR CAR SHOWROOM-1</h3>
              </div>
              <div>
                <h3>WELCOME TO OUR CAR SHOWROOM-2</h3>
              </div>
              <div>
                <h3>WELCOME TO OUR CAR SHOWROOM-3</h3>
              </div>
              <div>
                <h3>WELCOME TO OUR CAR SHOWROOM-4</h3>
              </div>
            </Slider>
          </div>
        )}
      </div>
    );
  }
}
