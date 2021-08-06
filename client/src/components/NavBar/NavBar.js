import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function NavBar(props) {
  // const [state, setState] = useState('');
  const [isOpen, setIsOpen] = useState(false);
 
  // const openNav = () => {
  //   document.getElementById("myNav").classList.add("open");
  //   document.getElementById("myNav").classList.remove("close");
  //   document.getElementById("contentOverlay").classList.add("contentShow");
  //   document.getElementById("contentOverlay").classList.remove("contentHide");
  // };

  // const closeNav = () => {
  //   document.getElementById("myNav").classList.add("close");
  //   document.getElementById("myNav").classList.remove("open");
  //   document.getElementById("contentOverlay").classList.add("contentHide");
  //   document.getElementById("contentOverlay").classList.remove("contentShow");
  // };
  const toggle = () => {
    document.getElementsByClassName("nav__icon")[0].classList.toggle("contentShow");
    if(isOpen){
      document.getElementById("myNav").classList.add("close");
      document.getElementById("myNav").classList.remove("open");
      // document.getElementById("nav__icon").classList.toggle("contentHide");
      // document.getElementById("nav__icon").classList.remove("contentShow");
    }
    else{
      document.getElementById("myNav").classList.add("open");
      document.getElementById("myNav").classList.remove("close");
      // document.getElementById("nav__icon").classList.add("contentShow");
      // document.getElementById("nav__icon").classList.remove("contentHide");
    }
    setIsOpen(!isOpen);

  }

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Navbar
        style={{ position: "fixed", width: "100%" }}
        color="transparent"
        dark
        expand="md"
      >
        <NavbarBrand className="navBrand" href="/">
          <img id="fishfingerLogoImg" src="./assets/logo-black-icon.svg" width="15%" alt="" />
          <span id='fishfingerLogo' style={{ fontSize: "4vh" }}>fishfinger</span>
        </NavbarBrand>
        <div>
          <div id="myNav" class="overlay">
            {/* <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
              &times;
            </a> */}
            <div id="contentOverlay" className="overlay-content">
              <a href="/about">About
              {/* <img width='5%' src="./assets/wave-gif-repet.gif" alt=''/><img width='5%' src="./assets/wave-gif-repet.gif" alt=''/> */}
              </a>
              <a href="#">Services</a>
              <a href="#">Clients</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <a href='#' className='nav__trigger' onClick={toggle}>
            <span
            style={{ "font-size": "30px", cursor: "pointer", color: "white",zIndex:"2" }}
            className='nav__icon'
          >
            {/* &#9776; */}
          </span>
          </a>
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;

// import React from "react";
// import "./NavBar.css";
// function NavBar(props) {

//   return (
//     <div id="navbar">
//        {/* <img src="./assets/logo-black-icon.svg" width="15%" alt="" />
//            <span style={{fontSize:"4vh",textDecoration:"none",color:"white"}}>fishfinger</span> */}
//       <a style={{textDecoration:"none"}} className='navBrand' href="/" >  <img src="./assets/logo-black-icon.svg" width="15%" alt="" />
//            <span style={{fontSize:"4vh",textDecoration:"none",color:"white"}}>fishfinger</span></a>
//       <a
//         href="/"
//         class="nav__trigger"
//         onClick={function (e) {
//           e.preventDefault();
//           document
//             .getElementById("navbar")
//             .classList.toggle("nav--active");
//             document
//                 .getElementById("navbar")
//                 .classList.toggle("nav-displayActive");
//         }}
//         >
//         <span class="nav__icon"></span>
//       </a>
//       <nav class="nav">
//         <ul class="nav__list">
//           <li class="nav__item">
//             <a class="nav__link" href="/">
//               INTRO
//             </a>
//           </li>
//           <li class="nav__item">
//             <a class="nav__link" href="/portofolio">
//               MY PORTOFOLIO
//             </a>
//           </li>
//           <li class="nav__item">
//             <a class="nav__link" href="/about">
//               ABOUT ME
//             </a>
//           </li>
//           <li class="nav__item">
//             <a class="nav__link" href="/contact">
//               CONTACT
//             </a>
//           </li>

//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default NavBar;
