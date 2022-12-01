import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SendIcon from '@mui/icons-material/Send';

export const Footer = () => {
  return (
    <>
      <div className="footer_header">
        <div className="container-fluid">
          <div className="company_box">
            <div className="row pt">
              <div className="col-sm-12 company_col p-4">
                <div className="row">
                  <div className="col-sm-2">
                    <div className="company_image ">
                      <img
                        src="https://enefti.modeltheme.com/wp-content/uploads/2022/01/Main-Client1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="company_image">
                      <img
                        src="https://enefti.modeltheme.com/wp-content/uploads/2022/01/Main-Client6.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="company_image">
                      <img
                        src="https://enefti.modeltheme.com/wp-content/uploads/2022/01/Main-Client4.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="company_image">
                      <img
                        src="https://enefti.modeltheme.com/wp-content/uploads/2022/01/Main-Client3.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="company_image">
                      <img
                        src="https://enefti.modeltheme.com/wp-content/uploads/2022/01/Main-Client2.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="company_image">
                      <img
                        src="https://enefti.modeltheme.com/wp-content/uploads/2022/01/Main-Client1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 footer_col">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="address_box">
                      <h4 className="address_head">Our Address</h4>
                      <p className="address_para">
                        4 Grand Central Terminal New York, NY 10 City name, CA
                        90896 USA. contact@example.com
                      </p>
                      <ul>
                        <li>
                        <Link to='' className="icon_link"> <FacebookIcon sx={{ color: 'gray', }}/> </Link>
                        </li>
                        <li>
                        <Link to='' className="icon_link"> <FacebookIcon sx={{ color: 'gray', }}/> </Link>
                        </li>
                        <li>
                        <Link to='' className="icon_link"> <TwitterIcon sx={{ color: 'gray', }}/> </Link>
                        </li>
                        <li>
                        <Link to='' className="icon_link"> <LinkedInIcon sx={{ color: 'gray', }}/> </Link>
                        </li>
                        <li>
                        <Link to='' className="icon_link"> <InstagramIcon sx={{ color: 'gray', }}/> </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-3">
                  <div className="useful_link_box">
                      <h4 className="useful_head text-light">Useful Links</h4>
                      <ul>
                        <li><KeyboardDoubleArrowRightIcon sx={{ color: "#959595" }}  />
                        <Link to='' className="icon_link">Collectibles </Link>
                        </li>
                        <li><KeyboardDoubleArrowRightIcon sx={{ color: "#959595" }}  />
                        <Link to='' className="icon_link">Photography </Link>
                        </li>
                        <li><KeyboardDoubleArrowRightIcon sx={{ color: "#959595" }}  />
                        <Link to='' className="icon_link">Trading Cards </Link>
                        </li>
                        <li><KeyboardDoubleArrowRightIcon sx={{ color: "#959595" }}  />
                        <Link to='' className="icon_link">Virtual Worlds </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-sm-3">
                  <div className="policy_box">
                      <h4 className="policy_head text-light">Useful Links</h4>
                      <ul>
                        <li><KeyboardDoubleArrowRightIcon sx={{ color: "#959595" }}  />
                        <Link to='' className="icon_link">Help Center </Link>
                        </li>
                        <li><KeyboardDoubleArrowRightIcon sx={{ color: "#959595" }}  />
                        <Link to='' className="icon_link">My Collections </Link>
                        </li>
                        <li><KeyboardDoubleArrowRightIcon sx={{ color: "#959595" }}  />
                        <Link to='' className="icon_link">Platform Status</Link>
                        </li>
                        <li><KeyboardDoubleArrowRightIcon sx={{ color: "#959595" }}  />
                        <Link to='' className="icon_link">Newsletter</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="information_box">
                    <h4 className="info_head text-light">Stay Informed By Newsletter</h4>
                    <p className="info_para">*Subscribe to our newsletter to receive early discount offers and updates.</p>
                    <div className="info_input">
                        <input type="text" className="email" placeholder="Enter your email" />
                        <button type="button" className="send_btn"><SendIcon/></button>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 pt-4 pb-3">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="ending_text">
                            <p className="copyright_text text-light">Copyright by ModelTheme. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <p className="auther_text text-light">Elite Author on ThemeForest.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
