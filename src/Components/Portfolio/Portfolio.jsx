import React from 'react'
import './portfolio.css'
import { FaArrowRightLong } from "react-icons/fa6";
import portfolioOne from '../../assets/latestUpdate/news-img1.jpg';
import portfolioTwo from '../../assets/latestUpdate/news-img2.jpg';
import portfolioThree from '../../assets/latestUpdate/news-img3.jpg';
import iconBounceImg1 from '../../assets/iconBounceImg/client-bounce-img1.jpg';
import iconBounceImg2 from '../../assets/iconBounceImg/client-bounce-img2.jpg';
import iconBounceImg3 from '../../assets/iconBounceImg/client-bounce-img3.jpg';
import iconBounceImg4 from '../../assets/iconBounceImg/client-bounce-img4.jpg';


export default function Portfolio() {
  return (
    <section className="portfolioSec">
        <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-6 col-sm-6">
                    <div className="portfolioTitle">
                        <h5>NEWS & LATEST UPDATES</h5>
                        <h2>Check Inside Story.</h2>
                    </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-6 text-center">
                <button className="portfolioBtn">SEE MORE NEWS <FaArrowRightLong /></button>
              </div>
              <div className="col-md-4">
                <div className="portfolioImg">
                  <img src={portfolioOne} alt="portfolio1" className='portfolioImgOne'/>
                  <h5>APRIL 25, 2024 _ DEVELOPMENT</h5>
                  <h3>Does My Website Need a Blog?</h3>
                  <button className="protfolioBtn">Read More <FaArrowRightLong /></button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="portfolioImg">
                  <img src={portfolioTwo} alt="portfolio1" className='portfolioImgOne' />
                  <h5>APRIL 25, 2024 _ DEVELOPMENT</h5>
                  <h3>Does My Website Need a Blog?</h3>
                  <button className="protfolioBtn">Read More <FaArrowRightLong /></button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="portfolioImg">
                  <img src={portfolioThree} alt="portfolio1" className='portfolioImgOne'/>
                  <h5>APRIL 25, 2024 _ DEVELOPMENT</h5>
                  <h3>Does My Website Need a Blog?</h3>
                  <button className="protfolioBtn">Read More <FaArrowRightLong /></button>
                </div>
              </div>
            </div>
        </div>
        
        <div className="sliderIcons">
        <div className="icon-img py-4">
          <img src={iconBounceImg1} className="clientBounceImg clientBounceImg1" alt='clientBounceImg'/>
          <img src={iconBounceImg2} className="clientBounceImg clientBounceImg2" alt='clientBounceImg'/>
          <img src={iconBounceImg3} className="clientBounceImg clientBounceImg3" alt='clientBounceImg'/>
          <img src={iconBounceImg4} className="clientBounceImg clientBounceImg4" alt='clientBounceImg'/>
        </div>
        <div className="logos">
                <div className="logoSlider">
                    <div className="silderText"><span className='slideSpan'>+91 7890654312</span></div>
                    <div className="silderText">demo@gmail.com</div>
                </div>
        </div>
      </div>
    </section>
  )
}
