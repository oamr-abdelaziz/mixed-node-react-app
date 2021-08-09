import React, { useState, useEffect } from "react";
import { div, Container, Jumbotron, Row } from "reactstrap";
import Footer from "../../components/Footer/Footer";
import "./home.scss";
function Home(props) {
  const [state, setState] = useState("");
  window.onscroll = function () {
    var backGround = document.getElementById("videoContainer");
    var showHideSecondTxt = document.getElementsByClassName("secondPage")[0];
    var moveLogo = document.getElementById("fishfingerLogo");

    if (window.pageYOffset > 190) {
      backGround.classList.add("orangeBack");
      showHideSecondTxt.classList.add("displayTxt")
      moveLogo.classList.add("moveLogo");

    } else {
      backGround.classList.remove("orangeBack");
      showHideSecondTxt.classList.remove("displayTxt")
      moveLogo.classList.remove("moveLogo");


    }
  };

  

//   var w = window.matchMedia("(max-width: 700px)");
//   var vid = document.getElementById("vid");
//   var source = document.createElement("source");
//   source.id = "hvid";
//   source.setAttribute("type", "video/mp4");
//   vid.appendChild(source);
  
//   if (w.matches) {
//     // vid.pause();
//     source.removeAttribute("src");
//     source.setAttribute("src", "./assets/Magicians_Mobile_5_gfyhw.mp4");
//     // vid.load();
//     // vid.play();
//   } else {
//     // vid.pause();
//     source.removeAttribute("src");
//     source.setAttribute("src", "./assets/Magicians_3_vzbge.mp4");
//     // vid.load();
//     // vid.play();
//   }

// window.addEventListener("resize", function(){
//   var w = window.matchMedia("(max-width: 700px)");
//   // var vid = document.getElementById("vid");
//   var source = document.getElementById("hvid");
  
//   if (w.matches) {
//     // vid.pause();
//     source.src = "./assets/Magicians_Mobile_5_gfyhw.mp4";
//     // vid.load();
//     // vid.play();
//   } else {
//     // vid.pause();
//     source.src = "./assets/Magicians_3_vzbge.mp4";
//     // vid.load();
//     // vid.play();
//   }
// });
  const scrollDown=()=>{
    window.scrollBy(0, window.innerHeight);
        // window.scrollTo({
    //   top: 620,
    //   behavior: 'smooth'
    // });
  }
  useEffect(() => {
    var w = window.matchMedia("(max-width: 700px)");
  var vid = document.getElementById("vid");
  var source = document.createElement("source");
  source.id = "hvid";
  source.setAttribute("type", "video/mp4");
  vid.appendChild(source);
  
  if (w.matches) {
    vid.pause();
    source.removeAttribute("src");
    source.setAttribute("src", "./assets/Magicians_Mobile_5_gfyhw.mp4");
    vid.load();
    vid.play();
  } else {
    vid.pause();
    source.removeAttribute("src");
    source.setAttribute("src", "./assets/Magicians_3_vzbge.mp4");
    vid.load();
    vid.play();
  }

window.addEventListener("resize", function(){
  var w = window.matchMedia("(max-width: 700px)");
  var vid = document.getElementById("vid");
  var source = document.getElementById("hvid");
  
  if (w.matches) {
    vid.pause();
    source.src = "./assets/Magicians_Mobile_5_gfyhw.mp4";
    vid.load();
    vid.play();
  } else {
    vid.pause();
    source.src = "./assets/Magicians_3_vzbge.mp4";
    vid.load();
    vid.play();
  }
});
    return () => {};
  }, []);

  return (
    <>
      <div id="videoContainer">
        <video id="vid"
          width="100%"
          loop="true"
          autoplay="autoplay"
          muted
        >
          {/* <source src="./assets/Magicians_Mobile_5_gfyhw.mp4" type="video/mp4"  media="all and (max-width: 600px)"/>
          <source src="./assets/Magicians_3_vzbge.mp4" type="video/mp4" media="all and (max-width: 1500px)"/> */}
          {/* <source id="hvid" src="./assets/Magicians_3_vzbge.mp4" type="video/mp4" /> */}
          {/* <video src="./assets/Magicians_3_vzbge.mp4" style={{width:"auto"}}/> */}
          Your browser does not support the video tag.
        </video>
        <div id="vidTxt">
          <h1 className="lightBold">
            We turn regular fish into
            <span className="boldTxt">MAGICANS</span>
          </h1>
          <a onClick={scrollDown}>
            <i style={{cursor:"pointer"}} className="fas fa-sort-down"></i>
          </a>
        </div>
        {/* <div  ></div> */}
        <Jumbotron className="secondPage">
          <div className="secondTxt">
            <div>
              We are an award-winning creative studio, based in London,
              specialising in <b>design, motion, web and social.</b>
            </div>
            <div>Our phenomenal team have completed work for:</div>
          </div>
          <br />
          <br />
          <div className="container">
            <div class="row">
              {/* <div className="col-1 col-lg-1"></div> */}
              <div className="col-lg-1 space" ></div>

              <div className="col-4 col-lg-2">
                <img src="./assets/nike.svg" alt="" />
              </div>
              {/* <div className="col-4 col-lg-2"></div> */}
              <div className="col-4 col-lg-2">
                <img src="./assets/google.svg" alt="" />
              </div>
              {/* <div className="col-4 col-lg-2"></div> */}
              <div className="col-4 col-lg-2">
                <img src="./assets/wwf.svg" alt="" />
              </div>
              {/* <div className="col-4 col-lg-2"></div> */}
              <div className="col-4 col-lg-2">
                <img src="./assets/red-bull.svg" alt="" />
              </div>
              {/* <div className="col-4 col-lg-2"></div> */}
              <div className="col-4 col-lg-2">
                <img src="./assets/king.svg" alt="" />
              </div>
              <div className="col-lg-1 space" ></div>
              <div className="col-lg-2 space" ></div>

            {/* </Row>
            <br />
            <br />
            <Row> */}
              {/* <div md="1"></div> */}
              <div className="col-4 col-lg-2">
                <img src="./assets/adidas.svg" alt="" />
              </div>
              {/* <div className="col-4 col-lg-2"></div> */}
              <div className="col-4 col-lg-2">
                <img src="./assets/riot-games.svg" alt="" />
              </div>
              {/* <div className="col-4 col-lg-2"></div> */}
              <div className="col-4 col-lg-2">
                <img src="./assets/penguin.svg" alt="" />
              </div>
              {/* <div className="col-4 col-lg-2"></div> */}
              <div className="col-4 col-lg-2">
                <img src="./assets/nhs.svg" alt="" />
              </div>
              {/* <div className="col-4 col-lg-2"></div> */}
            </div>
          </div>
          <br />
          <br />
        
            <button className='button'>FIND OUT MORE</button>
        </Jumbotron>
      </div>
      <Footer />
    
    </>
  );
}

export default Home;
