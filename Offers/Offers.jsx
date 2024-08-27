import React from 'react'
import './offers.css'
import { MdAirportShuttle, MdKingBed, MdLocationOn } from 'react-icons/md'
import { MdBathtub } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'

//Let us import images

import img12 from 'C:/Users/91888/travel_planner/src/Asserts/img12.jpg'
import img13 from 'C:/Users/91888/travel_planner/src/Asserts/img13.jpg'
import img14 from 'C:/Users/91888/travel_planner/src/Asserts/img14.jpg'


//so since we have finifhed styling every contenr, 
//let us also use the same high order array methods(map)
//to list our offers.

const offers=[
    {
        id:1,
        imgSrc:img12,
        destTitle:'Taj Mahal',
        location:'India',
        price:'$1000',
    },
    {
        id:2,
        imgSrc:img13,
        destTitle:'Efile Tower',
        location:'Paris',
        price:'$15000',
    },
    {
        id: 3,
        imgSrc: img14,
        destTitle: 'Great Wall of China',
        location: 'China',
        price:'$100',
    },
    
]
const Offers = () => {
    return (
        <section className='offer container section'>
            <div className="secContainer">
                <div className="secIntro">
                    <h1 className="secTitle">
                        Special Offers
                    </h1>
                    <p>
                    Explore the world's most breathtaking wonders, from ancient landmarks to awe-inspiring natural marvels. Your unforgettable adventure starts here!
                    </p>
                </div>

                <div className="mainContent grid">
                    {
                        offers.map(({id,imgSrc,destTitle,location,price})=>{
                            return (
                                <div className="singleoffer">
    <div className="destImage">
        <img src={imgSrc} alt={destTitle} />
        <span className="discount">
            30% off    
        </span>
         </div>

        <div className="offerBody">
            <div className="price flex">
                <h4>
                    {price}
                </h4>
                <span className="status">
                    For Rent
                </span>

            </div>

            <div className="amenities flex">
                <div className="singleAmenitt flex">
                    <MdKingBed className='icon'/>
                        <small>2 Beds</small>
                </div>

                <div className="singleAmenitt flex">
                    <MdBathtub className='icon'/>
                        <small>1 Bath Tub</small>
                </div>

                <div className="singleAmenitt flex">
                    <FaWifi className='icon'/>
                        <small>wifi</small>
                </div>

                <div className="singleAmenitt flex">
                    <MdAirportShuttle className='icon'/>
                    <small>Shuttle</small>
                </div>
            </div>

            <div className="location flex">
                <MdLocationOn className='icon'/>
                <small>450 Vine #310,{location}</small> 
            </div>
            <button className='btn flex'>
                View Details
                <BsArrowRightShort className='icon'/>
            </button>
        </div>
     </div>

                            )                               
                            
                        })
                    }
                </div>
            </div>
        </section>
     )
}

export default Offers
