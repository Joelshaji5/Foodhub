import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { imgUrl } from './constant/Constant';


function RestaurantDetail() {

    const[menuDetail, setMenuDetail] = useState();

    const {id} =useParams();
    console.log(menuDetail)

    useEffect(()=>{
        FetchMenuDetail();

    },[]);

    async function FetchMenuDetail(){

        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5244584&lng=73.7786739&restaurantId=554158&submitAction=ENTER");
        const json = await data.json();
        await setMenuDetail(json?.data?.cards[0]?.card?.card?.info);
        console.log(menuDetail)
        // const {name,cloudinaryImageId,costForTwoMessage,avgRatingString} = menuDetail


    }



  return (
    <div>
        <h1>Restaurant id {id}</h1>
        <img src={imgUrl+menuDetail?.cloudinaryImageId} />
        <h1> {menuDetail?.name}</h1>
        <h3> {menuDetail?.avgRatingString} stars</h3>
        <h3>{menuDetail?.costForTwoMessage}</h3>
        <h3>{menuDetail?.city} , {menuDetail?.locality}</h3>

        <h3></h3>


      

        

    </div>
  )
}

export default RestaurantDetail