import React from 'react'
import './SocialMenu.css';
import { Link } from 'react-router-dom'
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const SocialMenu = () => {
  return (
    <>
        <div className="header_social p-2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="social_title">
                            <h6 className='social_head text-light pt-4'>Discover, find and sell extraordinary NFT with us.</h6>
                        </div>
                    </div>
                    <div className="col-sm-7 ">
                        <div className="social_icons ">
                            <ul className='social_ul'>
                                <li className='social_list'><Link to=''  className='social_anchor'><TelegramIcon className='social_icon'/></Link></li>
                                <li className='social_list'><Link to=''  className='social_anchor'><FacebookIcon className='social_icon'/></Link></li>
                                <li className='social_list'><Link to=''  className='social_anchor'><TwitterIcon className='social_icon'/></Link></li>
                                <li className='social_list'><Link to=''  className='social_anchor'><TelegramIcon className='social_icon'/></Link></li>
                                <li className='social_list'><Link to=''  className='social_anchor'><LinkedInIcon className='social_icon'/></Link></li>
                                <li className='social_list'><Link to='' className='social_anchor_btn'>CREATE NFT</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
