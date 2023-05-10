import React from "react";

import './certification.css';
import Front from './front.jpg';
import Java from './java.jpg';
import Js from './js.jpg';
import Mongo from './mongo.jpg';
import Html from './html.jpg';
import Css from './css.jpg'


export function Certification()
{
    return(
        
        <>
        
        <div className="container-fluid  certficate jusytify-content-around backbg2">
        <h1 className=" text-center">Certification</h1>
            <div className="row mt-5" >
                <div  className="col-lg-4 box ">
                <img src={Front} alt="" className=" certificate1 col-lg-11 " />
                <h5 className=" ml-3 text-light">Front-End Development </h5>
                </div>
                 <div  className="col-lg-4  box ">
                <img src={Java} alt="" className="certificate2 col-lg-11 "/>
                <h5 className=" ml-3 text-light">Java Programming</h5>
                </div>
                <div  className="col-lg-4  box "> 
                 <img src={Js} alt="" className=" certificate3 col-lg-11 "/>
                 <h5 className=" ml-3 text-light"> Javascript</h5>
                 </div>   
                 <div  className="col-lg-4  box "> 
                 <img src={Mongo} alt="" className=" certificate3 col-lg-11 "/>
                 <h4 className=" ml-3 text-light"> </h4>
                 </div> 
                 <div  className="col-lg-4  box "> 
                 <img src={Html} alt="" className=" certificate3 col-lg-11 "/>
                 <h4 className=" ml-3 text-light"> Programming With Javascript</h4>
                 </div> 
                 <div  className="col-lg-4  box "> 
                 <img src={Css} alt="" className=" certificate3 col-lg-11 "/>
                 <h4 className=" ml-3 text-light"> Programming With Javascript</h4>
                 </div>   
                    
            </div>
        </div>
        </>
    );

}
