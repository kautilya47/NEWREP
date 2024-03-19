import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import updates_data from './updates_data.json';
import { Link } from 'react-router-dom';

function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };
    const firstFiveUpdates = updates_data.slice(0, Math.min(updates_data.length, 5));
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {firstFiveUpdates.map((updates, index) => (
                    <div key={index} className='flex bg-blue-300 text-center h-24'>
                        <span><Link to="/updates"><h3>Have you checked out the latest <b>{updates.product_type}</b> update ?</h3></Link></span>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SimpleSlider