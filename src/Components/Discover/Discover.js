import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Discover.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AllNfts } from "../List Data/Explore NFTs/AllNfts";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export const Discover = () => {
  const category_list = [
    {
      name: "3D APE",
      value: "3D APE",
    },
    {
      name: "3DPunks",
      value: "3DPunks",
    },
    {
      name: "Archetype",
      value: "Archetype",
    },
    {
      name: "Avid Lines",
      value: "Avid Lines",
    },
    {
      name: "Azuki",
      value: "Azuki",
    },
    {
      name: "Chimera by mpkoz",
      value: "Chimera by mpkoz",
    },
    {
      name: "Cool Cats 3D",
      value: "Cool Cats 3D",
    },
    {
      name: "Coolman's",
      value: "Coolman's",
    },
    {
      name: "Doodles",
      value: "Doodles",
    },
    {
      name: "FoxFam",
      value: "FoxFam",
    },
    {
      name: "FoxyFam",
      value: "FoxyFam",
    },
    {
      name: "Lucky Zeros",
      value: "Lucky Zeros",
    },
    {
      name: "Mars Cats Voyage",
      value: "Mars Cats Voyage",
    },
    {
      name: "Nyan Cat (Official)",
      value: "Nyan Cat (Official)",
    },
    {
      name: "PhantaBear",
      value: "PhantaBear",
    },
    {
      name: "Swampverse",
      value: "Swampverse",
    },
    {
      name: "Normal",
      value: "Normal",
    },
    {
      name: "Rare",
      value: "Rare",
    },
    {
      name: "Super Rare",
      value: "Super Rare",
    },
  ];

  const [checked, setChecked] = useState()
  console.log(checked)
  return (
    <>
      <div className="discover_header">
        <div className="container-fluid">
          <div className="row">
            <div className="discover_box">
              <div className="col-sm-12 discover_head_col">
                <div className="discover_head">
                  <h2 className="discover_heading">Search Results for:</h2>
                  <span className="discover_text">
                    <Link to="/" className="go_home_link">
                      Enefti
                    </Link>{" "}
                    / Search result for"
                  </span>
                </div>
              </div>
              <div className="col-sm-12 pt-5">
                <div className="row ">
                  <div className="col-sm-3 category_col">
                    <div className="category_box">
                      <div className="search_box ">
                      <h4 className=""><strong>Search</strong></h4>
                        <form>
                          <input
                            type="text"
                            placeholder="Search.."
                            name="search"
                            className="search_input"
                          />
                        </form>
                      </div>

                      <div className="category_list pt-5">
                        <h4><strong>Category</strong></h4>

                        {
                            category_list.map((items, index)=>{
                                return(

                        <FormGroup key={index}>
                          <FormControlLabel
                            control={<Checkbox unchecked />}
                            label={items.name}
                            value={items.value}
                            onChange={(e)=>setChecked(e.target.value)}
                          />
                        </FormGroup>
                                )
                            })
                        }
                      </div>

                      <div className="Nft_state_box">
                        <h4 className="pt-5"><strong>NFT State</strong></h4>
                        <FormGroup >
                          <FormControlLabel
                            control={<Checkbox unchecked />}
                            label="Buy Now"
                            value="buynow"
                          />
                        </FormGroup>

                        <FormGroup >
                          <FormControlLabel
                            control={<Checkbox unchecked />}
                            label="Has Offers"
                            value="hasoffers"
                          />
                        </FormGroup>

                        <FormGroup >
                          <FormControlLabel
                            control={<Checkbox unchecked />}
                            label="On Auction"
                            value="onauction"
                          />
                        </FormGroup>
                      </div>


                      <div className="price_filter">
                      <h4 className="pt-5"><strong>Filter by price</strong></h4>
                      <Box sx={{ width: 300 }}>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value=""
                                step={1}
                                // onChange=""
                                // valueLabelDisplay="auto"
                                // getAriaValueText={valuetext}
                            />
                        </Box>
                        <button type="button" className="btn btn-primary">Filter</button>
                        <span className="price_value">Price: £0 — £175,790</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <div className="row">
                        <div className="col-sm-12">
                        <div className="row ">
                            <div className="col-sm-8">
                            <div className="grid_box">
                                <span>Showing 1–9 of 166 results    </span>
                            </div>
                            </div>
                            <div className="col-sm-4">
                            <div className="grids_box">
                                <button type="button" className="grid_btn grid_left"><GridViewIcon/></button>
                                <button type="button" className="grid_btn grid_right"><ViewListOutlinedIcon/></button>

                            <div className="select_box">
                                <Box sx={{ minWidth: 120 }}>
                                <FormControl  sx={{ minWidth: 150 }}>
                                    <InputLabel id="demo-simple-select-label">Relavance</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value=""
                                    label="Age"
                                    onChange=""
                                    >
                                    <MenuItem value="relavance">Relavance</MenuItem>
                                    <MenuItem value="popularity">Sort by popularity</MenuItem>
                                    <MenuItem value="rating">Sort by average rating</MenuItem>
                                    <MenuItem value="latest">Sort by latest</MenuItem>
                                    <MenuItem value="low to high">Sort by price: low to high</MenuItem>
                                    <MenuItem value="high to low">Sort by price: high to low</MenuItem>
                                    </Select>
                                </FormControl>
                                </Box>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <div className="row pt-4">
                            {
                                AllNfts.map((items, index)=>{
                                    return(
                                        <div className="col-sm-4 card_col mb-3" key={index}>
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
                                <div className="col-sm-4">
                                
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
      </div>
    </>
  );
};
