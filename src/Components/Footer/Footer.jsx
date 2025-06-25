import React,  { useRef } from 'react'
import './footer.css';
import footerImg from '../../assets/logo/ff-white-logo.png';
import { MdPhoneInTalk } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-scroll';
import emailjs from '@emailjs/browser';

export default function Footer() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_mwxygoe', 'template_p7odlco', form.current, {
            publicKey: 'R1okQSSdYuLPABvxTqqxb',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.traget.reset();
              alert("Email Sent")
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
        );
    };
  return (
    <footer className='footer'>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-4 col-sm-6">
                    <div className="footer-logo">
                        <img src={footerImg} alt="footerImg" />
                        <p>When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.</p>
                        <div className="footerAdress">
                            <div className="contactArea">
                               <MdPhoneInTalk className='footerIcon'/>
                               <h6>+1 451 356 888</h6>
                            </div>
                            <div className="contactArea">
                               <MdOutlineAttachEmail className='footerIcon'/>
                               <h6>biogi@mail.com</h6>
                            </div>
                            <div className="contactArea">
                               <IoHomeOutline className='footerIcon'/>
                               <h6>121 Parkview St. California, USA</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-4">
                    <div className="footerWeiget">
                        <h4>Quick Link</h4>
                        <div className="footerLink">
                            <Link className='footerLinkName'>Home</Link>
                        </div>
                        <div className="footerLink">
                            <Link className='footerLinkName'>About</Link>
                        </div>
                        <div className="footerLink">
                            <Link className='footerLinkName'>Service</Link>
                        </div>
                        <div className="footerLink">
                            <Link className='footerLinkName'>Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-4">
                    <div className="footerWeiget">
                        <h4>Quick Link</h4>
                        <div className="footerLink">
                            <Link className='footerLinkName'>Home</Link>
                        </div>
                        <div className="footerLink">
                            <Link className='footerLinkName'>About</Link>
                        </div>
                        <div className="footerLink">
                            <Link className='footerLinkName'>Service</Link>
                        </div>
                        <div className="footerLink">
                            <Link className='footerLinkName'>Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyRight">
           <div className="container">
                <div className="row copyRightFlex">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="copyRightArea">
                        <p>© 2024 | All rights reserved by The_Krishna</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="copyrightIcon">
                        <form action=""className='formElement'ref={form} onSubmit={sendEmail}>
                        <input type="email"name="email"placeholder='Enter Your Email' />
                        <button className="footerBtn">Submit</button>
                        </form>
                    </div>
                </div>
                </div>
               </div>
        </div>

    </footer>
  )
}
