import React,{useContext} from 'react'
import {popularProducts} from '../data'
import './Products.css'
import { AiOutlineShoppingCart ,AiOutlineSearch ,AiOutlineHeart} from 'react-icons/ai';
import {globalContext} from '../App'
import { NavLink } from 'react-router-dom';

function Products() {
  const{func}=useContext(globalContext)
  // console.log(func)
  return (
   <>
    <div className="prd_ctr">
      <div className="inner_prd_ctr">
        {
          popularProducts.map((item,i)=>{
            return(
            
                <div key={i}  className="box">
                  <img data-aos="zoom-in"
                   src={item.img} alt="" />
                  <div className="inner_bx">
                    <div className="icons_bx">
                    <div className="icons">
                   <NavLink to={`/single/${item.id}`}>

                    <AiOutlineShoppingCart size='2rem' onClick={()=>func(item.id)} />
                   </NavLink>
                    </div>
                    <div className="icons">
                    <AiOutlineSearch size='2rem' />
                    </div>
                    <div className="icons">
                    <AiOutlineHeart size='2rem' />
                    </div>
                    </div>
                  </div>
                </div>
            
            )
          })
        }
      </div>
    </div>
   </>
  )
}

export default Products