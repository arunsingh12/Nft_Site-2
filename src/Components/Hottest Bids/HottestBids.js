import React from 'react'
import './HottestBids.css'
import { HottestBidsCard } from './HottestBidsCard'

export const HottestBids = () => {
  return (
    <>
    <div className="header_hottestbid">
        <div className="container-fluid">
        <div className="hottestbid_box">
            <div className="row">
                <div className="col-sm-12 pb-4">
                    <div className="hottestbid_head">
                        <h3 className='bid_heading'>Hottest Bids</h3>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="row">
                   <HottestBidsCard  image ="https://enefti.modeltheme.com/wp-content/uploads/2022/02/349831649.png-600x600.png" name="Avidlines #349831649" price="£402.48"/>

                   <HottestBidsCard  image ="https://enefti.modeltheme.com/wp-content/uploads/2022/02/9990.png-600x600.png" name="Azuki #9990" price="£54,984.60"/>

                   <HottestBidsCard  image ="https://enefti.modeltheme.com/wp-content/uploads/2022/02/QmUTKkqSC6qpXFwsCDqWE1nKVPoipgbLtmvwVW317wVGqM-600x600.png" name="FoxFam #9996" price="£402.48"/>

                   <HottestBidsCard  image ="https://enefti.modeltheme.com/wp-content/uploads/2022/02/3332-1-600x600.png" name="Lucky Zeros #3332" price="£402.48"/>
                   
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
