import logo from './logo.svg';
import './App.css';
import React from "react";
import {MainNavBar} from './component/navbar/nav';
import {AboutMe} from './component/home/home';
import {Certification} from './component/Certificate/certification';
import ContactPage from './component/contact/contact';
import {Education} from './component/education/edu';
import Tech from './component/Tech/tech';
// import SkillBar from './component/Tech/skillbar';
import {About} from './component/about/about';
import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.bundle.min.js'



import { BrowserRouter, Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



// const App = () => {
//   return (
//     <div className="App">
//       <StarRating />
//     </div>
//   );
// };


function App() {
  return (
    <>
       
<BrowserRouter>
        <Routes>
          <Route path='/' element={[<MainNavBar/>]} />
         
          <Route path='/AboutMe' element={[<AboutMe/>]} />
          <Route path='/Certification' element={[<Certification/>]} />
          <Route path='/ContactPage' element={[<ContactPage/>]} />
          <Route path='/Education' element={[<Education/>]} />
          {/* <Route path='/Tech' element={[<Tech/>]} /> */}
          <Route path='/About' element={[<About/>]} />
          {/* <Route path='/Skillbar' element={[<Tech/>]} /> */}
         
           
        </Routes>
      </BrowserRouter>
     
    <AboutMe/> 
    <About/>
    <Certification/>
    <Education/>
    {/* <SkillBar/> */}
    {/* <Tech/> */}
    <ContactPage/>
   
   
   

    </>
  );
}

export default App;
