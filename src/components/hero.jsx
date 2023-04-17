import React from 'react'
import "../styles/hero-style.css";
import Navbar from './navbar';
import CountdownTimer from './CountdownTimer';
import "../styles/style.css";
import InkuCanvas from './inku';
function Hero()
{
    const THREE_DAYS_IN_MS = 1* 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    return(
        <div className='hero-section'>
            <Navbar />
            <div className='hero-text'>
                <h3>WELCOME TO</h3>
                <h1>INQUA</h1>
                <div className='inku3D'>
                    <InkuCanvas />
                </div>
                <h3 className='right-h3'>INDIA<span className='special-text'>'</span>S MOST EXCITING EVENT</h3>
                <div className='counter'>
                    <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                </div>
            </div>

        </div>
    )
}

export default Hero