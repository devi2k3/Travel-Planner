import React from 'react'
import './about.css'
//iages=-===============================>

import img16 from 'C:/Users/91888/travel_planner/src/Asserts/cimg16.jpg'
import img17 from 'C:/Users/91888/travel_planner/src/Asserts/mimg17.jpg'
import img18 from 'C:/Users/91888/travel_planner/src/Asserts/climg18.jpg'

//importing videos=====================>
import video from 'C:/Users/91888/travel_planner/src/Asserts/video1.mp4'
import video1 from 'C:/Users/91888/travel_planner/src/Asserts/video2.mp4' 

const About = () => {
    return (
        <section className='about section'>
            <div className="secContainer">
                <h3 className="title">
                    Why Hiking?
                </h3>

                <div className="mainContent container grid">
                    <div className="singleItem">
                        <img src={img18} alt="Image Name" />

                        <h3>100+ Mountains</h3>

                        <p>At our travel planner, we bring you over 100 incredible mountains to explore! From peaceful trails to thrilling peaks, we offer unforgettable hiking experiences that connect you with nature and fill your soul with joy. Every hike is an opportunity to discover breathtaking views, embrace adventure, and create lasting memories.<br/></p>
                        <br/>
                        <p>Join us, lace up your boots, and let's embark on a journey where every step leads to a new and exciting story!
                        </p>
                    </div>

                    <div className="singleItem">
                        <img src={img17} alt="Image Name" />

                        <h3>1000+ Hickings</h3>

                        <p>Ready to explore over 1000 breathtaking mountains? We're here to guide you on the adventure of a lifetime! Discover stunning trails, awe-inspiring views, and the pure joy of connecting with nature. Every mountain is a new story waiting for you.</p><br/>
                        <p> Let's hike, explore, and make unforgettable memories together!</p>
                    </div>

                    <div className="singleItem">
                        <img src={img16} alt="Image Name" />

                        <h3>999+ Customers</h3>

                        <p>We’re proud to have earned the trust of over 999 customers who choose our website for their travel planning needs! Our community of adventurers grows every day, and we are committed to providing exceptional experiences that inspire exploration and discovery.</p><br/><p> Join us and see why so many explorers rely on us to craft their perfect journeys!</p>
                    </div>

                    

                </div>

                <div className="videoCard container">
                   <div className="cardContent grig">
                    <div className="cardText">
                        <h2>Discover Extraordinary Living</h2>

                        <p>At our core, we believe in the magic of extraordinary places. Step into a world where every destination opens the door to wonder and adventure. From quaint cottages nestled in tranquil settings to luxurious villas with breathtaking views, we offer unique experiences that captivate the soul and spark the imagination. We’re passionate about creating spaces that blend comfort, beauty, and unforgettable moments, allowing you to escape the everyday and make lasting memories. Discover a lifestyle with us where every stay transforms ordinary moments into extraordinary experiences.
                        </p>
                    </div>
                        <div className="cardvideo">
                            <video src={video} autoPlay loop muted type="video/mp4"></video>
                        </div>

                    </div> 
                    
                </div>
            </div>
        </section>
     )
}

export default About