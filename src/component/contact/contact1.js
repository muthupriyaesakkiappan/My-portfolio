import React from "react";
import './contact1.css';
export function Contact(){
    return(
        <secttion className="contact">
            <h2 className="heading text-center">Contact <span> Me!</span> </h2>
            <form action="#">
                <div className="row ml-5">
                <div className="input-box col-lg-4">
                    <input type="text" placeholder="Full name"/>
                    <input type="text" placeholder="Email Address"/>

                </div>
                <div className="input-box col-lg-4">
                    <input type="number" placeholder="Mobile Number"/>
                    <input type="text" placeholder="Email Subject"/>

                </div>
                </div>
               < textarea name="" id="" cols="30" rows="10" placeholder="Your Meassage"/>
               <input type="submit" className="rounded bg-primary p-1 text-light" placeholder="Send Message"/>
            </form>
           
        </secttion>
    );
}