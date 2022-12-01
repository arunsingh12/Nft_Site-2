import React from 'react'
import { Link } from 'react-router-dom';
import './HomeBanner.css';

export const HomeBanner = () => {
  return (
    <>
        <div className="header ">
        <div className="container-fluid">
            <div className="banner_box pb-5">
                <div className="row pt-5">
                    <div className="col-sm-7">
                        <div className="banner_image text-center">
                            <img src="https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic-768x532.jpg"  alt="" />
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="banner_content">
                            <h1 className='banner_heading text-light'>Discover, Collect & Sell <span className='ordinary_text'> Extraordinary </span> NFTs</h1>
                            <p className='banner_para text-light'>The Crypto Monkey is a high-quality collection of 100 unique monkeys on the NFTMart marketplace.</p>
                          <div className="banner_button mt-5">
                            <Link to='/discover' className='banner_btn'>DISCOVER</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}
