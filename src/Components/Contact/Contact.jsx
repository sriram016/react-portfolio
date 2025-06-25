import React from 'react'
import './contact.css';

export default function Contact() {
  return (
    <section className="contactSec"id='contact'>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 col-lg-12">
                    <div className="contactSecHeading text-center"> 
                       <h2 className="contactTitle">Have a project in your mind?</h2>
                       <button className="contactBtn">Contact Me</button>
                       <h4 className="contactTitleTime">09 : 00 AM - 10 : 30 PM</h4>
                       <h6 className="contactTitleDay">Monday to Saturday</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
