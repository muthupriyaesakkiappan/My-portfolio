import React from "react";

import './edu.css';
export function Education()
{
    return(
        <>
        
        <div className="  edu container-fluid row justify-content-around mb-5"> 
             <div>
                <h1 >Education</h1>
             </div >
             <div className=" justify-content-around  "> 
                 <div className="row p-3">
                     <div className="col-lg-4 boxmod p-3">
                         <h3>Kg College of Arts and science</h3>
                          <h4>Coimbatore</h4>
                         <h5>B Sc computerscience</h5>
                     
                      </div>
                <div className=" col-lg-4  boxmod pl-5">
               
                   <h3>Swathanthra higher Secondary school</h3>
                  <h4>Coimbatore</h4>
                   <h5>Higher Secondary Certificate</h5>
              
            </div>
                     <div className=" boxmod col-lg-4 pl-5">
                         
                            <h3>Secondary School Leaving Certificate</h3>
                            <h3> Swathanthra higher Secondary school Secondary</h3>
                           
                            <p>Coimbatore</p>
                           
                        </div>
                   </div>
        </div>
        </div>
      
       
        </>
    );
}