import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import heroImg1 from '../../../assets/img/hero-img.jpg';
import heroImg2 from '../../../assets/img/hero-img-2.jpg';
import heroImg3 from '../../../assets/img/hero-img-3.jpg';
import heroImg4 from '../../../assets/img/hero-img-4.jpg';


function Hero_2() {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4];

  return (
    <div>
      <section id="hero" className="hero-2">
        <Slider {...settings}>
          {heroImages.map((image, index) => (
            <div key={index}>
              <div
                className="hero-box"
                style={{ backgroundImage: `url(${ image })` }}
              >
                <div className="hero-content-wrapper">
                  <h1>A New Generation of Natural Cosmetic.</h1>
                  <p className="hero-cont-bottom">
                    Vel quam elementum pulvinar non. Eget sit amet tellus cras
                    adipiscing enim. Blandit turpis habitasse platea.
                  </p>
                  <div className="hero-btn">
                    <a
                      className="btn btn-custom btn-custom-secondary"
                      href="shop.html"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
                <div className="hero-overlay"></div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default Hero_2;