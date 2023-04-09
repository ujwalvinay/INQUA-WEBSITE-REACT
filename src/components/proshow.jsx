import React from 'react'
import "../styles/proshow-style.css"
export default function ProShows()
{
    return (
        <div className='proshow-div'>
            <h2 className='vertical-h2'>PRO SHOWS</h2>
            <div className='proshow-cards'>
                <div class="card">
                    <div class="card__content">
                        <div class="card__title"><h2>DJ SNAKE</h2></div>
                        <div class="card__text"><p>DJ night</p></div>
                    </div>
                </div>
                <div class="card">
                    <div class="card__content">
                        <div class="card__title"><h2>DJ SNAKE</h2></div>
                        <div class="card__text"><p>DJ night</p></div>
                    </div>
                </div>
                <div class="card">
                    <div class="card__content">
                        <div class="card__title"><h2>DJ SNAKE</h2></div>
                        <div class="card__text"><p>DJ night</p></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}