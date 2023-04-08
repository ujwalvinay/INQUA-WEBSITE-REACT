import React from 'react'
import "../styles/hero-style.css";
import Navbar from './navbar';
import "../styles/style.css"
function Hero()
{
    return(
        <div className='hero-section'>
            <Navbar />
            <div className='hero-text'>
                <h3>WELCOME TO</h3>
                <h1>INQUA</h1>
                <h3 className='right-h3'>INDIA<span className='special-text'>'</span>S MOST EXCITING EVENT</h3>
            </div>
            
        </div>
    )
}

export default Hero