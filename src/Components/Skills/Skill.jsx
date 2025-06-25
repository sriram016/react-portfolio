import React from 'react'
import './skill.css';
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiPhp } from "react-icons/si";

export default function Skill() {
  return (
    <section className="skill">
        <div className="container">
                <div className="skillTitle text-center">
                    <h6>My Skills</h6>
                    <h3>My Expertise.</h3>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-4 py-4">
                        <div className="skilBox">
                           <TiHtml5 className='skillIcon'/>
                           <h3>97%</h3>
                           <h5>HTML</h5>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-4 py-4">
                        <div className="skilBox">
                           <IoLogoCss3 className='skillIcon'/>
                           <h3>97%</h3>
                           <h5>CSS</h5>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-4 py-4">
                        <div className="skilBox">
                           <TbBrandJavascript className='skillIcon'/>
                           <h3>97%</h3>
                           <h5>Javascript</h5>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-4 py-4">
                        <div className="skilBox">
                           <FaReact className='skillIcon'/>
                           <h3>97%</h3>
                           <h5>React Js</h5>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-4 py-4">
                        <div className="skilBox">
                           <SiMysql className='skillIcon'/>
                           <h3>97%</h3>
                           <h5>Mysql</h5>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-4 py-4">
                        <div className="skilBox">
                           <SiPhp className='skillIcon'/>
                           <h3>97%</h3>
                           <h5>PHP</h5>
                        </div>
                    </div>
                </div>
        </div>
    </section>
  )
}
