/**
 *
 * Carousel
 *
 */

import React from 'react';
import Slider from 'react-slick';
// import ProductSlider from './productSlider.js';
import Img from './Img';
import Container from './container';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from './images/4thOfJulyAd_2.jpg';
import image2 from './images/aapex.jpg';
import image3 from './images/ContestResults.jpg';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5000,
    touchMove: true,
  };

  return (
    <Slider {...settings}>
      <Container>
        <Img src={image1} />
      </Container>
      <Container>
        <Img src={image2} />
      </Container>
      <Container>
        <Img src={image3} />
      </Container>
    </Slider>
  );
}

Carousel.propTypes = {};

export default Carousel;
