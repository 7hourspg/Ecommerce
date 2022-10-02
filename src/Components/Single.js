import React, { useContext, useState,useEffect } from "react";
import { globalContext } from "../App";
import { popularProducts } from "../data";

import "./single.css";
function Single() {
  const [quantity, setQuantity] = useState(1);
  const [NewData, setNewData] = useState([]);
  const { newId } = useContext(globalContext);
  useEffect(() => {
    setNewData(
      popularProducts.filter((item) => {
        return item.id === newId;
      })
    );
  }, [newId]);

 
  const handleQuantityI = () => {
    setQuantity(quantity + 1);
  };
  const handleQuantityD = () => {
    setQuantity(quantity - 1);
  };

  return (
    <>
      <div className="header_txt">
        <p>Super Deal! free shipping on orders over $50</p>
      </div>
      <div className="single_ctr">
        <div className="img_ctr">
          {NewData.map((item, i) => {
            return (
              <div key={i}>
                <img src={item.img} alt="" />
              </div>
            );
          })}
        </div>
        <div className="detail_ctr">
          <div className="p_dtl">
            <h2 style={{ marginBottom: "2rem" }}>Denim Jumpsuit</h2>
            <p style={{ marginBottom: "2rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              autem explicabo deserunt eos, illo modi obcaecati molestiae
              commodi est facilis fugiat dolor voluptatibus quisquam repudiandae
              commodi facere, perferendis quaerat adipisci mollitia magnam?
              Harum eum quaerat deleniti veniam qui fuga illum.
            </p>
            <h3>${quantity * 20}</h3>
            <div className="color">
              <div className="left_clr">
                <div>
                  <p>Color</p>
                </div>
                <div className="clr1"></div>
                <div className="clr2"></div>
                <div className="clr3"></div>
              </div>
              <div className="right_clr">
                <select>
                  <option id="A" value="A">
                    Choose Size
                  </option>
                  <option value="B">Banana</option>
                  <option value="C">Cranberry</option>
                </select>
              </div>
            </div>
            <div className="buy">
              <div className="buylft">
                <button onClick={() => handleQuantityD()}>
                  <p>-</p>
                </button>
                <button className="digit">{quantity}</button>
                <button onClick={() => handleQuantityI()}>
                  <p>+</p>
                </button>
              </div>
              <div className="buyright">
                <button>add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Single;
