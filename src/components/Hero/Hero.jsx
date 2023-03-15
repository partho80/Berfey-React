import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import heroImg1 from '../../../assets/img/hero-img.jpg';
import heroImg2 from '../../../assets/img/hero-img-2.jpg';
import heroImg3 from '../../../assets/img/hero-img-3.jpg';
import heroImg4 from '../../../assets/img/hero-img-4.jpg';

function Hero() {
  const settings = {
  
      infinite: true,
      autoplay: true,
      speed: 1000,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
  };

  const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4];

  return (
    <div>
      <section id="hero" className="hero-1">
        <Slider {...settings}>
          {heroImages.map((image, index) => (
            <div key={index}>
              <div
                className="hero-box"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="container">
                  <div className="hero-content-wrapper">
                    <h1>Discover your Real beauty in Nature</h1>
                    <p className="hero-cont-bottom">
                      Lorem ipsum dolor, sit amet consectetur adipisicing
                      elit. Laudantium doloribus unde aperiam voluptatibus,
                      consectetur soluta.
                    </p>
                    <div className="hero-btn">
                      <a
                        className="btn btn-custom btn-custom-primary"
                        href="shop.html"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default Hero;
