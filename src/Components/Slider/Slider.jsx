import React from 'react'
import './slide.css'

export default function Slider() {
  return (
    <section className="slideSec">
        <div className="container-fluid">
            <div className="row">
                <div className="logos">
                <div className="logoSlider">
                    <div className="silderText"><span className='slideSpan'>User Interface</span></div>
                    <div className="silderText"> User Experience</div>
                    <div className="silderText"><span className='slideSpan'>Branding</span></div>
                    <div className="silderText">Marketing</div>
                    <div className="silderText"><span className='slideSpan'>User Experience</span></div>
                    <div className="silderText">Branding</div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
