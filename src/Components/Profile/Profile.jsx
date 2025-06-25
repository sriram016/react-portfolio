import React from 'react'
import './profile.css'
import profileImg from '../../assets/banner/girl-img2.png'
import yearsImg from '../../assets/banner/years-img.png'
import { FaArrowRight } from "react-icons/fa";

export default function Profile() {
  return (
    <section className="profileSec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="profileImg">
                        <img src={profileImg} alt="ProfileImg" />
                    </div>
                    <div className="experienceImg">
                        <img src={yearsImg} alt="ExperienceImg" className='yearImg' />
                        <div className="expText">1</div>
                        <div className="expPara">
                            <p>Years of <br /> Experience</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="profileInfo">
                        <h2>Profile Information</h2>
                        <h3>Hello! I’m Jessica a self-taught & award-winning Web Designer & Developer with over fifteen years of work experience. I started in my children’s room and got pro at renowned Ren Tech Agencies.</h3>
                        <p>Urna neque sollicitudin odio tempus eleifend est. Vestibulum dictum turpis diam arcu rutrum interdum aliquet iaculis. </p>
                        <button className="profilebtn">Explore Me <FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
