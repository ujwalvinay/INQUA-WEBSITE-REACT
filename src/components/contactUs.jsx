import React from 'react'
import "../styles/contact-style.css"
function ContactUs()
{
    return (
        <div className='contact-us-div'>
            <h2 className='contact-h2'>
                CONTACT US
            </h2>
            <div className='contact-form-div'>
                    <div class="contact-form">
                    <div class="imgDiv">
                    <div class="contact-us-info">
                            <h3 class="heading-title">We're Always Eager to Hear From You!</h3>
                            <ul class="address-list">
                                <li>
                                    <h5 class="title">Address</h5>
                                    <p>College of Engineering Trikaripur, Cheemeni PO, Cheemeni, Kerala 671313</p>
                                </li>
                                <li>
                                    <h5 class="title">Email</h5>
                                    <p><a href="mailto:contact@inquacetkr.com">contact@inquacetkr.com</a></p>
                                </li>
                                <li>
                                    <h5 class="title">Phone</h5>
                                    <p><a href="tel:+0917034914676">(+091) 7034914676</a></p>
                                </li>
                            </ul>
                            <ul class="social-share">
                                <li><a href="https://www.instagram.com/inquacetkr/  "><img src='../images/social-media/instagram.svg'/></a></li>
                                <li><a href="https://www.facebook.com/cetkrinqua"><img src='../images/social-media/facebook.svg'/></a></li>
                                <li><a href="https://www.facebook.com/cetkrinqua"><img src='../images/social-media/twitter.svg'/></a></li>
                                <li><a href="#"><img src='../images/social-media/youtube.svg'/></a></li>
                            </ul>
                        </div>
                    </div>
                    <form action="mailto:zisaapplication@gmail.com" method="post" enctype="text/plain" name="ContactUsEmail">
                          
                        <input name="name" type="text" class="feedback-input" placeholder="Name" id="customerName"/>   
                        <input name="email" type="email" class="feedback-input" id="customerEmail" aria-describedby="emailHelp" placeholder="Email"/>
                        <input name="number" type="text" class="feedback-input" placeholder="Mobile" id="customerPhone"/>
                        <textarea name="text" class="feedback-input" placeholder="Message" id="CustomerText"></textarea>
                        <div class="btnDiv">
                            <input type="submit" value="SEND"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;