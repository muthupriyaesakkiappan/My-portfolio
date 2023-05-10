import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import './nav.css';

import { Link as ScrollLink } from "react-scroll";

export function MainNavBar(){
    return(
        <>
          <div className="bodybg">
            <nav class="navbar navbar-expand-lg bg-dark data p-4">
                <div className="row col-lg-12 col">
                    <div className="col-lg-6">
                        <a class="navbar-brand" href="#"><h4>Portfolio</h4></a>
                           
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon navtag"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse col-lg-6 data1" id="navbarNavAltMarkup">
                        <div class="navbar-nav ">
                            <ScrollLink to="/" ><a class="nav-link active pr-4">Home</a></ScrollLink>
                            <ScrollLink activeclass="active" to="aboutpagediv" spy={true} smooth={true} duration={500}><a class="nav-link active pr-4">About</a></ScrollLink>
                            <ScrollLink activeClass="active" to="certficate" spy={true} smooth={true} duration={1200}><a class="nav-link active pr-4">Certificate</a></ScrollLink>
                            <ScrollLink activeClass="active" to="edu" spy={true} smooth={true} duration={1200}><a class="nav-link active pr-4" href="#">Education</a></ScrollLink>
                            <ScrollLink activeClass="active" to=" tech" spy={true} smooth={true} duration={1200}><a class="nav-link active pr-4" href="#">Technical Skill</a></ScrollLink>
                            <ScrollLink activeClass="active" to=" contact" spy={true} smooth={true} duration={1200}><a class="nav-link active pr-4" href="#">Contact</a></ScrollLink>
                        </div>
                    </div>
                </div>
                
            </nav>
            </div>
        </>
    );
}


