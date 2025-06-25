import React from 'react'
import './intro.css';
import { Link } from 'react-scroll';
import banner from '../../assets/banner/banner.png';


export default function Intro() {
  return (
    <section id="intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="introContent">
                  <h1 className="hello">Hello,</h1>
                  <h1 className="introText">I'm <span className="introName">Smith </span>Website Designer</h1>
                  <p className="introPara py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, optio fugiat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, optio fugiat. </p>
                  <Link><button className="introBtn">Hire Me</button></Link>
              </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="introImg">
              <img src={banner} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
