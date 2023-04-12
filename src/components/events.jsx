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
                        <img src='../images/cardcs.png'/>
                    </div>
                </div>
                <div class="div2 section"> 
                    <div class="CE Card">
                        <img src='../images/cardce.png'/>
                    </div>
                </div>
                <div class="div3 section"> 
                    <div class="EEE Card">
                        <img src='../images/cardeee.png' />
                    </div>
                </div>
                <div class="div4 section"> 
                    <div class="ECE Card">
                        <img src='../images/cardece.png'/>
                    </div>
                </div>
            </div>
        </div>
    )
}