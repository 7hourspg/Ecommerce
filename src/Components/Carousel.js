import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import { sliderItems } from "../data";

import { IoMdArrowDropright } from "react-icons/io";


function ControlledCarousel() {
  return (
    <>
      <div className="Carousel_ctr">
        <Carousel>
          {sliderItems.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <div
                  
                  style={{ backgroundColor: item.bg }}
                  className="inner_ctr"
                >
                  <div className="img">
                    <div
                      style={{ backgroundColor: item.circle_bg }}
                      className="circle_ctr" data-aos="fade-right"
                    ></div>
                    <img
                      className="d-block w-100"  data-aos="zoom-in"
                      src={item.img.image || item.img}
                      alt="First slide"
                    />
                  </div>
                  <div className="title_desc" data-aos="zoom-out">
                    <h1>{item.title}</h1>
                    <h2>{item.desc}</h2>
                    <button className="M_shopbtn">
                      Shop Now <IoMdArrowDropright />
                    </button>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default ControlledCarousel;
