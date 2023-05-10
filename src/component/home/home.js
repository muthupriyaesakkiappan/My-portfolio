import React from "react";
// import { animateScroll } from "react-scroll";
import  Mainimg  from "./full-stack-web-developer.jpg";
import './home.css';
// import aboutpageimage from './Images/aboutpageimage.webp'

import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export function AboutMe(){
    return (
        <>
            
            <div className="container-fluid row justify-content-around aboutpagediv">
               
           
                
                    <div className="col-lg-6">
                        <img src={Mainimg} alt="" className="col-lg-10 mt-5 ml-3 rounded"/>
                    </div>
                    <div className="col-lg-5 mt-5  ml-auto">
                    <h1 className="aboutpageheader mt-4  ml-4 heading ">Hi ,<span className="text-primary">I am</span></h1>
                    <h5 className="aboutpagepara ml-4 ">Muthupriya. Aspiring Full Stack Developer.</h5>
                   
                    <div className="icon mt-4 ml-4">
                    <a href="#" alt=""><FontAwesomeIcon icon={faFacebook} className="icon1 " /></a>
                    <a href="#" alt=""><FontAwesomeIcon icon={faInstagram} className="icon1 pl-2"/></a>
                    <a href="#" alt=""><FontAwesomeIcon icon={faTwitter} className="icon1 pl-2"/></a>
                    <a href="#" alt=""><FontAwesomeIcon icon={faLinkedinIn}  className="icon1 pl-2"/></a>
                    <div>
                    <a href="#" alt=""> <button type="button" class="btn btn-success rounded-pill mt-5 p-3  pl-3 ">Download CV</button></a>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}