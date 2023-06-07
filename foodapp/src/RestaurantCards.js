import React from 'react'
import "./components/Style.css"
import { Link } from 'react-router-dom';
import {imgUrl} from './components/constant/Constant'

function RestaurantCards(props) {

const {name,deliveryTime,costForTwoString,cloudinaryImageId} = props.resData.data;
// const {props.resData}= props;


  return (

        <div className='restaurantcard'>
      <img className='restaurentcardimg' src={imgUrl +cloudinaryImageId}/>
      <h2>{name}</h2>
      <h3>Rating {props.resData.data.avgRating}</h3>
      <h3> Delivery in {deliveryTime} Min</h3>
      <h3>{costForTwoString}</h3>
      </div>


  )
}

export default RestaurantCards;