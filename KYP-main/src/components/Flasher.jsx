import React from 'react'

function Flasher() {
    const colors = ["#0088FE", "#00C49F", "#FFBB28"];
    return (
        <div className="slideshow m-0 overflow-hidden max-w-96">
            <div className="slideshowSlider whitespace-nowrap">
                {colors.map((backgroundColor, index) => (
                    <div className="slide h-80 w-full inline-block" key={index} style={{ backgroundColor }} />
                ))}
            </div>
            <div className="slideshowDots text-center">
                {colors.map((_, idx) => (
                    <div key={idx} className="slideshowDot inline-block h-2 w-2 cursor-pointer mt-2 m1-1 mr-0 bg-gray-400"></div>
                ))}
            </div>
        </div>
    )
}

export default Flasher