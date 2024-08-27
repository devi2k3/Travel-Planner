import React from 'react'
import './popular.css'
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from 'react-icons/bs'
import { FaPlane } from 'react-icons/fa'
//import the images =====================>
import img1 from 'C:/Users/91888/travel_planner/src/Asserts/img1.jpeg'

//So now we are going to use a hign order array method to dispaly all the destinations using Map. 
//Tp do so we need to list all the destinations in one array "Data" and Later we shall call each destination bt index/id.

import img2 from 'C:/Users/91888/travel_planner/src/Asserts/img2.jpg'
import img3 from 'C:/Users/91888/travel_planner/src/Asserts/img3.jpg'
import img4 from 'C:/Users/91888/travel_planner/src/Asserts/img4.jpg'
import img5 from 'C:/Users/91888/travel_planner/src/Asserts/img5.jpg'
import img6 from 'C:/Users/91888/travel_planner/src/Asserts/img6.jpg'
import img7 from 'C:/Users/91888/travel_planner/src/Asserts/img7.jpg'
import img8 from 'C:/Users/91888/travel_planner/src/Asserts/img8.jpg'
import img9 from 'C:/Users/91888/travel_planner/src/Asserts/img9.jpg'
import img10 from 'C:/Users/91888/travel_planner/src/Asserts/img10.jpg'

const Data = [
    {
        id:1,
        imgSrc:img2,
        destTitle:'Taj Mahal',
        location:'India',
        grade:'Cultural Relax',
    },
    {
        id:2,
        imgSrc:img3,
        destTitle:'Efile Tower',
        location:'Paris',
        grade:'Cultural Relax',
    },
    {
        id: 3,
        imgSrc: img4,
        destTitle: 'Great Wall of China',
        location: 'China',
        grade: 'Adventure',
    },
    {
        id: 4,
        imgSrc: img5,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'Historical Adventure',
    },
    {
        id: 5,
        imgSrc: img6,
        destTitle: 'Sydney Opera House',
        location: 'Australia',
        grade: 'Cultural Experience',
    },
    {
        id: 6,
        imgSrc: img7,
        destTitle: 'Grand Canyon',
        location: 'USA',
        grade: 'Nature Adventure',
    },
    {
        id: 7,
        imgSrc: img8,
        destTitle: 'Santorini',
        location: 'Greece',
        grade: 'Relaxation',
    },
    {
        id: 8,
        imgSrc: img9,
        destTitle: 'Mount Fuji',
        location: 'Japan',
        grade: 'Nature Experience',
    },
    {
        id: 9,
        imgSrc: img10,
        destTitle: 'Christ the Redeemer',
        location: 'Brazil',
        grade: 'Cultural Landmark',
    },
    

]
const Popular = () => {
    return (
        <section className="popular section container">
            <div className="secContainer">

                <div className="secHeader flex">
                    <div className="textDiv">
                        <h1 className="secTitle">
                        Discover Iconic Destinations
                        </h1>
                        <br/>
                        <br/>
                        <p>
                            Explore the world's most breathtaking wonders, from ancient landmarks to awe-inspiring natural marvels. Your unforgettable adventure starts here!
                        </p>
                    </div>
                    <div className="iconDiv flex">
                        <BsArrowLeftShort className='icon leftIcon'/>
                        <BsArrowRightShort className='icon'/>
                    </div>
                </div>

                <div className="mainContent grid">
                    {
                    Data.map(({id,imgSrc,destTitle,location,grade}) => {
                       return(
                        <div className="singleDestination">
                        <div className="destImage">
                            <img src={imgSrc} alt="Image title" />
                            <div className="overlayinfo">
                                <h3>{destTitle}</h3>
                                <p>
                                    {location}
                                    
                                </p>

                                <BsArrowRightShort className='icon'/>
                            </div>
                        </div>
                        <div className="destFooter">
                            <div className="number">
                                {id}
                            </div>

                            <div className="destText flex">
                                <h6>
                                   {location}
                                </h6>
                                <span className='flex'>
                                    <span className="dot">
                                    <FaPlane/> 
                                    </span>
                                     TravelMosaic
                                </span>
                            </div>

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

export default Popular