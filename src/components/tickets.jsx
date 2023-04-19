import React from 'react'
import "../styles/ticket-style.css"
function Tickets()
{
    return (
        <div className='ticket-div'>
            <h2 className=' ticket-h2'>TICKETS</h2>
            <div className='ticket-cards'>
                <img src='../images/ProShowCS.png' alt='' className='ticket-cs'/>
                <img src='../images/ProShowCS.png' alt='' className='ticket-cs'/>
                <img src='../images/ProShowCS.png' alt='' className='ticket-cs'/>
            </div>
        </div>
    )
}

export default Tickets;