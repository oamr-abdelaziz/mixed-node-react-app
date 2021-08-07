import React, { useState, useEffect } from "react";
import { Col, Container, Jumbotron, Row } from "reactstrap";
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

  const scrollDown=()=>{
    window.scrollTo({
      top: 620,
      behavior: 'smooth'
    });
  }
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      {/* <video class="bg-media__video js-header-video" 
            autoplay="" loop="" muted="" playsinline="true" 
            data-desktop=
            "https://fishfinger.imgix.net/storage/uploads/homepage/Homepage3/Magicians_3_vzbge.mp4" 
            data-320=
            "https://fishfinger.imgix.net/storage/uploads/homepage/Homepage3/Magicians%20Mobile_5_gfyhw.mp4" 
            data-375=
            "https://fishfinger.imgix.net/storage/uploads/homepage/Homepage3/Magicians%20Mobile_5_gfyhw.mp4" 
            data-414=
            "https://fishfinger.imgix.net/storage/uploads/homepage/Homepage3/Magicians%20Mobile_5_gfyhw.mp4" 
            data-768=
            "https://fishfinger.imgix.net/storage/uploads/homepage/Homepage3/magiciansipad_yceic.mp4"> 
                 <source src="https://fishfinger.imgix.net/storage/uploads/homepage/Homepage3/Magicians_3_vzbge.mp4" 
                data-src=
                "https://fishfinger.imgix.net/storage/uploads/homepage/Homepage3/Magicians_3_vzbge.mp4" 
                type="video/mp4"></source> 
                </video> */}
      <container id="videoContainer">
        <video
          width="100%"
          loop="true"
          autoplay="autoplay"
          muted
          src="./assets/Magicians_3_vzbge.mp4"
          type="video/mp4"
        >
          {/* <source src="./assets/Magicians_3_vzbge.mp4" type="video/mp4"/> */}
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
          <Container>
            <Row>
              <Col xs="1"></Col>
              <Col xs="1">
                <img src="./assets/nike.svg" alt="" />
              </Col>
              <Col xs="1"></Col>
              <Col xs="1">
                <img src="./assets/google.svg" alt="" />
              </Col>
              <Col xs="1"></Col>
              <Col xs="1">
                <img src="./assets/wwf.svg" alt="" />
              </Col>
              <Col xs="1"></Col>
              <Col xs="1">
                <img src="./assets/red-bull.svg" alt="" />
              </Col>
              <Col xs="1"></Col>
              <Col xs="1">
                <img src="./assets/king.svg" alt="" />
              </Col>
              <Col xs="3"></Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col xs="2"></Col>
              <Col xs="1">
                <img src="./assets/adidas.svg" alt="" />
              </Col>
              <Col xs="1"></Col>
              <Col xs="1">
                <img src="./assets/riot-games.svg" alt="" />
              </Col>
              <Col xs="1"></Col>
              <Col xs="1">
                <img src="./assets/penguin.svg" alt="" />
              </Col>
              <Col xs="1"></Col>
              <Col xs="1">
                <img src="./assets/nhs.svg" alt="" />
              </Col>
              <Col xs="1"></Col>
            </Row>
          </Container>
          <br />
          <br />
        
            <button className='button'>FIND OUT MORE</button>
        </Jumbotron>
      </container>
      <Footer />
    
    </>
  );
}

export default Home;
