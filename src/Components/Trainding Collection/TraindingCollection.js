import React, { useState } from 'react'
import './TraindingColection.css'
import { Doodles } from '../List Data/Trainding Collection/Doodles'
import { LuckyZeros } from '../List Data/Trainding Collection/LuckyZeros'
import { PhantaBear } from '../List Data/Trainding Collection/PhantaBear'
import { AvidLines } from '../List Data/Trainding Collection/AvidLines'
import { Link } from 'react-router-dom'

export const TraindingCollection = () => {
  return (
    <div className="header">
        <div className="container-fluid">
            <div className="collection_box">
                <div className="row p-3">
                    <div className="col-sm-12">
                        <div className="collection_title">
                            <h1 className='collection_head text-light'>Trending Collections</h1>
                        </div>
                    </div>
                    <div className="col-sm-12 pt-4">
                    <div className="row">
                        <div className="col-sm-3 ">
                            <div className="row">
                            {
                                Doodles.map((items, index)=>{
                                    return(

                                <div className="col-sm-6 pb-2" key={index}>
                                    <div className="col_image">
                                        <img src={items.image} alt="" />
                                    </div>
                                </div>
                                    )
                                })
                            }
                            <div className="col-sm-12">
                            <div className="collection_content bg-dark">
                            <div className="collection_text">
                            <Link to='' className='name_link'>
                                <span className=' box_name text-light'>Doodles</span>
                                </Link>
                                </div>
                                <div className="items_length">
                                    <span className='text-light length_box'>{Doodles.length}items</span>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3 ">
                            <div className="row">
                            {
                                LuckyZeros.map((items, index)=>{
                                    return(

                                <div className="col-sm-6 pb-2" key={index}>
                                    <div className="col_image">
                                        <img src={items.image} alt="" />
                                    </div>
                                </div>
                                    )
                                })
                            }
                            <div className="col-sm-12">
                            <div className="collection_content bg-dark">
                            <div className="collection_text">
                            <Link to='' className='name_link'>
                                <span className=' box_name text-light'>Lucky Zeros</span>
                                </Link>
                                </div>
                                <div className="items_length">
                                    <span className='text-light length_box'>{LuckyZeros.length}items</span>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3 ">
                            <div className="row">
                            {
                                PhantaBear.map((items, index)=>{
                                    return(

                                <div className="col-sm-6 pb-2" key={index}>
                                    <div className="col_image">
                                        <img src={items.image} alt="" />
                                    </div>
                                </div>
                                    )
                                })
                            }
                            <div className="col-sm-12">
                            <div className="collection_content bg-dark">
                            <div className="collection_text">
                            <Link to='' className='name_link'>
                                <span className=' box_name text-light'>Phanta Bear</span>
                                </Link>
                                </div>
                                <div className="items_length">
                                    <span className='text-light length_box'>{PhantaBear.length}items</span>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3 ">
                            <div className="row">
                            {
                                AvidLines.map((items, index)=>{
                                    return(

                                <div className="col-sm-6 pb-2" key={index}>
                                    <div className="col_image">
                                        <img src={items.image} alt="" />
                                    </div>
                                </div>
                                    )
                                })
                            }
                            <div className="col-sm-12">
                            <div className="collection_content bg-dark">
                            <div className="collection_text">
                            <Link to='' className='name_link'>
                                <span className=' box_name text-light'>Avid Lines</span>
                                </Link>
                                </div>
                                <div className="items_length">
                                    <span className='text-light length_box'>{AvidLines.length}items</span>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
