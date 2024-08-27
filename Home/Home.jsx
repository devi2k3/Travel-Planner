import React from 'react'
import './home.css'

const Home = () => {
    
    return (
        <section className='home'>
            <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
                <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
                <source src={require('C:/Users/91888/travel_planner/src/Asserts/video1.mp4')} type="video/mp4" />
                </video>
  
</div>

            <div className="secContainer contanier">
                <div className="homeText">
                    <h1 className="title">
                    Plan your perfect adventure with our ultimate TravelMosaic.
                    </h1>
                    
                    <p className="subTitle">
                    Embark on a joyful adventure to your favorite city, where every step celebrates sustainability and creates unforgettable memories.
                    
                    </p>

                    <button className="btn">
                        <a href="#">Explore Now</a>
                    </button>
                </div>

                <div className="homeCard grid">

                    <div className="locationDiv">
                        <label htmlFor="location">Location</label>
                        <input type='text' placeholder=' Dream Destination'/>
                    </div>

                    <div className="distDiv">
                        <label htmlFor="price">Distance</label>
                        <input type='text' placeholder=' 11/Meters'/>
                    </div>

                    <div className="priceDiv">
                        <label htmlFor="location">Price</label>
                        <input type='text' placeholder='$140 - $500'/>
                    </div>
                    <button className='btn'>
                        Search
                    </button>
                </div>
            </div>
        </section>
     )
}

export default Home