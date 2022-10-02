import React from "react";
import "./Newslatter.css";
import {IoSendSharp} from 'react-icons/io5'
function Newslatter() {
  return (
    <div className="news_ctr">
    <div className="box1"><h1>Newslatter</h1>
    <p>get timely updates from your favourates Products</p></div>
    <div className="box2">
        <input type="text" placeholder="Your email" />
            <button><IoSendSharp size='2rem' color='white' /></button>
        
    </div>
      
    </div>
  );
}

export default Newslatter;
