// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import ProjectDetails from '../../../components/project-details/projectDetails';
// import './Comico.scss';
// function ComicoProject(props) {
//     const [state, setState] = useState('');
//     const history =useHistory();

//     useEffect(() => {
//         console.log(props);
//         if (history.location.pathname === 'comico'){
//             return null
//           }
//     }, []);

//     return (
//         <>
//             <style
//                 dangerouslySetInnerHTML={{
//                 __html: `
//                 .yellowBack {
//                 background-color: #EC1D32;
//                 color:'white';
//                 }
//             `
//                 }}
//             />
//             <ProjectDetails
//                 img="comic-con-comico-bradford-yellow-pop-art-logo-web.png"
//                 title="BRAND NAMING | BRAND IDENTITY | PRINT DESIGN"
//                 name="BRADFORD COMICO"
//                 description="Bradford Comico is a multi-genre entertainment convention held annually in conjunction with the Bradford Literature Festival. The convention showcases comic books, graphic novels, anime, pop culture related film, television, and other similar arts including a larger range of entertainment elements across virtually all genres that highlight quality, diversity and individuality."
//                 challenge1="The challenge was to create a complete brand identity system that was aesthetically exciting."
//                 challenge2="The logo design had to be versatile in many uses, well-thought out to be able to work with various colour combinations as well as various patterns which easily helps to expand the brand system, if required. It should convey the energy and enthusiasm of the event while still showcasing the pop-culture influence throughout the identity."
//                 solution1="Speech bubbles, used most commonly in comic books and manga, are used as the logo frame. Because they connote communication, they perfectly convey what a convention is — a social gathering of like-minded individuals to discuss thoughts, voice opinions and express ideas."
//                 solution2='Patterns representing the 3 aspects of the event are used interchangeably. A "Halftone" pattern for vintage and pop (superheroes and comic books), "Sunburst" pattern for the "Land-of the Rising Sun" (Asian pop-culture) and a "Cloud Explosion" pattern (dark concept and themed graphic novels).'
//                 solution3="Coupling everything with a loud and bright colour scheme, the result is a brand that's adaptive, versatile and exciting."
//             >
//         <div className='second-project-image'>
//             <img src='./assets/comic-2.png' alt='comico-2' />
//         </div>
//         <div className='second-project-image'>
//             <img src='./assets/comico-3.png' alt='comico-3' />
//         </div>

//         <div className='third-project-images'>
//             <img  src='./assets/comico-4.png' alt='comico-4' />
//             <img  src='./assets/comico-5.png' alt='comico-5' />
//         </div>

//         <div className='second-project-image'>
//             <img src='./assets/comico-6.png' alt='comico-6' />
//         </div>
//         <div className='third-project-images'>
//             <img  src='./assets/comico-7.png' alt='comico-7' />
//             <img  src='./assets/comico-8.png' alt='comico-8' />
//         </div>
//         <div className='third-project-images'>
//             <img  src='./assets/comico-9.png' alt='comico-9' />
//             <img  src='./assets/comico-10.png' alt='comico-10' />
//         </div>
//         {/* <div className='fourth-project-images'>
//             <img  src='./assets/comico-5.png' alt='comico-5' />
//             <img  src='./assets/comico-6.png' alt='comico-6' />
//             <img  src='./assets/comico-7.png' alt='comico-7' />
//             <img  src='./assets/comico-8.png' alt='comico-8' />
//         </div> */}
//         <div className='second-project-image'>
//             <img src='./assets/comico-11.png' alt='comico-11' />
//         </div>
           

//             </ProjectDetails>
//         </>
//     )
// }

// export default ComicoProject;