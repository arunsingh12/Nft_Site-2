import React from 'react'
import './CreateSellNfts.css'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { CreateSellCard } from './CreateSellCard';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export const CreatSellNfts = (props) => {
  return (
    <>
        <div className="header_create">
            <div className="container-fluid">
                <div className="create_box">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="create_head text-center ">
                                <h2 className='create_heading text-light'>Create and Sell Your NFTs</h2>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="row">
                                <CreateSellCard icon={ <AccountBalanceWalletOutlinedIcon sx={{ color: "white", fontSize: 26 }} />} name="Set up your Wallet" para="Et ligula ullamcorper malesuada proin libero nunc consequat. Sagittis aliquam malesuada bibendum arcu." />

                                <CreateSellCard icon={ <PhotoOutlinedIcon sx={{ color: "white", fontSize: 26 }} />} name="Create your Collection" para="At in tellus integer feugiat scelerisque varius morbi enim nunc. Faucibus ornare suspendisse sed nisi lacus." />

                                <CreateSellCard icon={ <DesktopWindowsOutlinedIcon sx={{ color: "white", fontSize: 26 }} />} name="Add your NTFs" para="Varius sit amet mattis vulputate enim nulla. Pulvinar mattis nunc sed blandit libero volutpat sed. In nulla." />

                                <CreateSellCard icon={ <SendOutlinedIcon sx={{ color: "white", fontSize: 26 }} />} name="List item for Sale" para="Placerat vestibulum lectus mauris ultrices eros. Cursus vitae congue mauris rhoncus aenean vel." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
