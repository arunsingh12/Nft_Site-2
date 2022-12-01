import React from "react";
import "./ExploreNfts.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom";
import { AllNfts } from "../List Data/Explore NFTs/AllNfts";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SegmentIcon from '@mui/icons-material/Segment';

export const ExploreNfts = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="explore_box">
          <div className="row">
            <div className="col-sm-12 pb-2">
              <div className="row pb-3">
                <div className="col-sm-6">
                  <h3 className="explore_head">Explore NFTs</h3>
                </div>
                <div className="col-sm-6 ">
                  <div className="explore_btns">
                    <button type="button" className="allnfts_btn"><FormatListBulletedIcon />All Nft's</button>
                    <button type="button" className="allnfts_btn"><SegmentIcon />Sale Type</button>
                    <button type="button" className="allnfts_btn"><SegmentIcon />Fixed Price</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="row">
              {
                AllNfts.map((items, index)=>{
                    return(
                <div className="col-sm-3 card_col mb-3" key={index}>
                <div className="card_box">
                  <div className="card " >
                    <img
                      className="card-img-top"
                      src={items.image}
                      alt="Card image"
                    />
                    <div className="card-body card_buttom">
                    <Link to="" className="card_link">
                      <span className="card-title text-dark" > <strong>{items.imgname}</strong></span>
                      </Link>  <span className="card_icon"><FavoriteBorderIcon/></span>
                      <hr />
                      <span className="card-text text-muted card_para">Reverse price</span>
                      <p className="card-text card_price"><b>{items.price}</b></p>
                    </div>
                  </div>
                  </div>
                </div>
                    )
                })
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
