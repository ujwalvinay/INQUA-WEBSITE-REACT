import React from 'react'
import "../styles/events-style.css"

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};



export default function Events()
{
    return (
        <div className='events-div'>
            <h2 className='vertical-h2'>
                EVENTS
            </h2>
            {/* <div class="parent">
                <div class="div1 section">
                    <div class="CSE Card">
                        <img src='../images/cardcs.png'/>
                        <div class="cardbottom">          
                        <h4>Inqua <span>'23</span></h4>
                        <img class="arrow" src="../images/arrow.svg" />
                    </div>
                    </div>
                     
                </div>
                <div class="div2 section"> 
                    <div class="CE Card">
                        <img src='../images/cardce.png'/>
                            <div class="cardbottom">          
                            <h4>Inqua <span>'23</span></h4>
                            <img class="arrow" src="../images/arrow.svg" />
                        </div>
                    </div>
                    
                </div>
                <div class="div3 section"> 
                    <div class="EEE Card">
                        <img src='../images/cardeee.png' />
                        <div class="cardbottom">          
                        <h4>Inqua <span>'23</span></h4>
                        <img class="arrow" src="../images/arrow.svg" />
                        </div>
                    </div>
                    
                </div>
                <div class="div4 section"> 
                    <div class="ECE Card">
                        <img src='../images/cardece.png'/>
                        <div class="cardbottom">          
                        <h4>Inqua <span>'23</span></h4>
                        <img class="arrow" src="../images/arrow.svg" />
                    </div>
                    </div>
                    
                </div>
            </div> */}

            <motion.div
    className="container parent"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    <motion.div key={1} className="item div1 section" variants={item}>
                    <div class="CSE Card">
                        <img src='../images/cardcs.png'/>
                        <div class="cardbottom">          
                            <h4>Inqua <span>'23</span></h4>
                            <img class="arrow" src="../images/arrow.svg" />
                        </div>
                    </div>
    </motion.div>
    <motion.div key={2} className="item div2 section" variants={item}>
    <div class="CE Card">
                        <img src='../images/cardce.png'/>
                            <div class="cardbottom">          
                            <h4>Inqua <span>'23</span></h4>
                            <img class="arrow" src="../images/arrow.svg" />
                        </div>
                    </div>
    </motion.div>
    <motion.div key={3} className="item div3 section" variants={item}>
                    <div class="EEE Card">
                        <img src='../images/cardeee.png' />
                        <div class="cardbottom">          
                        <h4>Inqua <span>'23</span></h4>
                        <img class="arrow" src="../images/arrow.svg" />
                        </div>
                    </div>
    </motion.div>
    <motion.div key={4} className="item div4 section" variants={item}>
                    <div class="ECE Card">
                        <img src='../images/cardece.png'/>
                        <div class="cardbottom">          
                        <h4>Inqua <span>'23</span></h4>
                        <img class="arrow" src="../images/arrow.svg" />
                        </div>
                    </div>
    </motion.div>
  </motion.div>
        </div>
    )
}