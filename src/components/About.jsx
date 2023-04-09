import React from 'react'
import "../styles/about-style.css"
export default function About()
{
    return (
        <div className='about-div'>
            <h2>ABOUT</h2>
            <div className='about-flex'>
                <div className='text-div'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 

laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 

                </div>
                <div className='img-div'>
                    <img src='../images/about-img.svg' alt='' className='about-img'/>
                </div>
            </div>
        </div>
    )
}