
import React from 'react'
import './HottestBidsCard.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

export const HottestBidsCard = (props) => {
  return (
    <>
         <div className="col-sm-3 card_col" >
                <div className="card_box">
                  <div className="card " >
                  <Link to=''>
                    <img
                      className="card-img-top"
                      src={props.image}
                      alt="Card image"
                    />
                    </Link>
                    <div className="card-body card_buttom">
                    <Link to="" className="card_link">
                      <span className="card-title text-dark" > <strong>{props.name}</strong></span>
                      </Link>  <span className="bid_icon "><FavoriteBorderIcon /></span>
                      <hr />
                      <span className="card-text text-muted card_para">Reverse price</span>
                      <p className="card-text card_price"><b>{props.price}</b></p>
                    </div>
                  </div>
                  </div>
                </div>
    </>
  )
}
