import React from 'react'
import { IoStarHalf, IoStar, IoStarOutline } from "react-icons/io5";

function PythonCourses ({python},{key}) {
    let Bestseller="Bestseller"
    if(!python.bestseller)  Bestseller=""
    
  return (
    <div className="courseblock">
        <img className="image" alt="image" src={python.image} /> 
        <h3 className="title"> {python.title}</h3>
        <h4 className="author"> {python.author} </h4>
        <div className="rating">
            <span className="rate"> {python.rate}</span>
            <IoStar className="fa fa-star checked"/>
            <IoStar className="fa fa-star checked"/>
            <IoStar className="fa fa-star checked"/>
            <IoStar className="fa fa-star checked"/>
            <IoStarHalf className="fa fa-star checked"/>
            <span className="reviews" > ({python.reviews}) </span>
        </div>
        <div className="cost">
            <div className="price"><h3>E£ {python.price} </h3></div> 
            <div className="pre_discount"><h3>E£ {python.pre_discount} </h3></div>
        </div>
        <div className="bestseller">{Bestseller}</div>

    </div>
  );
};
export default PythonCourses;