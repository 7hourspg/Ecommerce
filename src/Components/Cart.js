import React from "react";

import "./Cart.css";
import { GoPrimitiveDot } from "react-icons/go";
import img from "../images/sule-makaroglu-Z-noaU-GOCk-unsplash-removebg.png";
function Cart() {
 
  return (
    <>
      <h1 className="cart_hdrtext">Your Cart</h1>
      <div className="cart_ctr">
        <div className="continue_shp">
          <div className="box1">
            <button>continue shoping</button>
          </div>
          <div className="box2">
            <button>Check out</button>
          </div>
        </div>
        <div className="product_chekcout_ctr">
          <div className="box1">
            <img src='https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png' alt="" />
          </div>
          <div className="box2">
            <div className="inner_bx1">
              <div>
                <p>Product : hakura t-shirt</p>
              </div>
              <div>
                <p>order id : 1</p>
              </div>

              <div>size : small</div>
              <div>
                <GoPrimitiveDot size="2.5rem" color="red" />
              </div>
            </div>
            <div className="inner_bx2">
              <h3>$20</h3>
              {/* <button>Checkout</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
