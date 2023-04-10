import React from 'react'
import "../styles/events-style.css"
export default function Events()
{
    return (
        <div className='events-div'>
            <h2 className='vertical-h2'>
                EVENTS
            </h2>
            <div class="parent">
                <div class="div1 section">
                    <div class="CSE Card">
                        <p>DEPARTMENT OF</p>
                        <h3>COMPUTER SCIENCE</h3>
                        <p>ENGINEERING</p>
                    </div>
                </div>
                <div class="div2 section"> 
                    <div class="CE Card">
                        <p>DEPARTMENT OF</p>
                        <h3>CIVIL</h3>
                        <p>ENGINEERING</p>
                    </div>
                </div>
                <div class="div3 section"> 
                    <div class="EEE Card">
                    <p>DEPARTMENT OF</p>
                        <h3>ELECTRICAL</h3>
                        <p>ENGINEERING</p>
                    </div>
                </div>
                <div class="div4 section"> 
                    <div class="ECE Card">
                        <p>DEPARTMENT OF</p>
                        <h3>ELECTRONICS</h3>
                        <p>ENGINEERING</p>
                    </div>
                </div>
            </div>
        </div>
    )
}