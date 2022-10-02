import React from "react";
import "./Categories.css";
import { categories } from "../data";
import { GrFormNextLink } from 'react-icons/gr';
function Categories() {
  return (
    <>
      <div className="catgr_ctr">
        <div className="catgr_inner_ctr">
          {categories.map((item, i) => {
            return (
              <div className="box" key={i}>
                <img data-aos="zoom-out" src={item.img} alt="" />
                <div data-aos="zoom-out" className="title">
                 <h2>{item.title}</h2>
                 <button>Shop Now <GrFormNextLink/></button>
                </div>
              </div>
            );
          })}

          <div className="box2"></div>
          <div className="box3"></div>
        </div>
      </div>
    </>
  );
}

export default Categories;
