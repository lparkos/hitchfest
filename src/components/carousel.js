import * as React from 'react'
import { Link } from 'gatsby'
import Carousel from 'react-bootstrap/Carousel';

import pic1 from '../images/elements/carousel/1.png'
import pic2 from '../images/elements/carousel/2.png'
import pic3 from '../images/elements/carousel/3.png'
import pic4 from '../images/elements/carousel/4.png'
import pic5 from '../images/elements/carousel/5.png'
import pic6 from '../images/elements/carousel/6.png'



const CarouselGallery = () => {
  return (
    <Carousel variant="dark" touch="true" controls="false">
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={pic1}
            alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={pic2}
            alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={pic3}
            alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={pic4}
            alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={pic5}
            alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={pic6}
            alt="First slide"
        />
        </Carousel.Item>
        {/* <Carousel.Item>
        <img
            className="d-block w-100"
            src={pic7}
            alt="First slide"
        />
        </Carousel.Item> */} */}
    </Carousel>
  )
}
export default CarouselGallery
