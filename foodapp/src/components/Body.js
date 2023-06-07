import React, { useEffect, useState } from 'react'
import RestaurantCards from '../RestaurantCards';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
function Body() {


    const [restaurant,setRestaurent] = useState([])

    useEffect(()=>{fetchRestaurent();}
    ,[]);
    

       async function fetchRestaurent(){
         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5244584&lng=73.7786739&page_type=DESKTOP_WEB_LISTING");
         const json = await data.json();
         setRestaurent(json?.data?.cards[2]?.data?.data?.cards);

        }

  return (

    (restaurant==0)?<Shimmer/>:

    <div className='restaurentCardContainer'>  


        {restaurant.map((rest)=>{
            return(
                <Link to={"/restaurantdetail/" + rest.data.id} 
                key={rest.data.id}
                >

                <RestaurantCards resData ={rest} />
                </Link>
            )
        })}

    </div>
  )
}

export default Body