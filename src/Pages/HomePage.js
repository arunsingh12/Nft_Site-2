import React from 'react'
import { CreatSellNfts } from '../Components/Create Sell NFTs/CreatSellNfts'
import { ExploreNfts } from '../Components/ExploreNfts/ExploreNfts'
import { HomeBanner } from '../Components/Home Banner/HomeBanner'
import { HottestBids } from '../Components/Hottest Bids/HottestBids'
import { LeatestNews } from '../Components/Leatest News/LeatestNews'
import { TraindingCollection } from '../Components/Trainding Collection/TraindingCollection'
import { TraindingCollectors } from '../Components/Trainding Collectors/TraindingCollectors'

export const HomePage = () => {
  return (
        <>
            <HomeBanner/>
            <TraindingCollection/>
            <ExploreNfts/>
            <TraindingCollectors/>
            <CreatSellNfts/>
            <HottestBids/>
            <LeatestNews/>
        </>
    )
}
