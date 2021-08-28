import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "reactstrap";
import Footer from "../../components/Footer/Footer";
import "./Service.scss";

function Service(props) {
  const [state, setState] = useState("");
  const {
    img,
    backgroundColor,
    name,
    title,
    description,
    leftImg,
    leftTitle,
    leftHeader,
    leftDesc,
    middleImg,
    middleTitle,
    middleHeader,
    middleDesc,
    rightImg,
    rightTitle,
    rightHeader,
    rightDesc,
    checkMsg,
    Project1,
    Project2,
    Project3,
    Project4,
    Project5,
    Project6,
  } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [scrolling, setScrolling] = useState(false);

  let buttonClickedFlag = false;

  const handleTouchStart = (event) => {
    if (event.target.tagName !== "BUTTON") {
      touchstartY = event.changedTouches[0].screenY;
    } else {
      buttonClickedFlag = true;
    }
  };

  const handleTouchEnd = (event) => {
    console.log(buttonClickedFlag);
    if (buttonClickedFlag) {
      buttonClickedFlag = false;
    } else {
      touchendY = event.changedTouches[0].screenY;
      handleGesure(event);
    }
  };

  let touchstartY = 0;
  // let touchendX = 0;
  let touchendY = 0;

  function handleGesure(e) {
    let yOffset = window.pageYOffset;
    if (!window.matchMedia("(max-width: 700px)").matches) {
      if (!scrolling) {
        setScrolling(true);
        console.log("touchendY", touchendY);
        console.log("touchstartY", touchstartY);

        if (
          touchendY > touchstartY &&
          currentPage === 2 &&
          yOffset <= window.innerHeight
        ) {
          e.preventDefault();
          scrollUp();
        } else if (touchendY < touchstartY && currentPage === 1) {
          e.preventDefault();
          scrollDown();
        } else {
          console.log("click event");
        }
        setTimeout(() => {
          setScrolling(false);
        }, 500);
      }
    } else {
      if (!scrolling) {
        setScrolling(true);
        console.log("touchendY", touchendY);
        console.log("touchstartY", touchstartY);

        if (
          touchendY > touchstartY &&
          currentPage === 2 &&
          yOffset <= window.innerHeight
        ) {
          e.preventDefault();
          scrollUpSmall();
        } else if (touchendY < touchstartY && currentPage === 1) {
          e.preventDefault();
          scrollDownSmall();
        } else {
          console.log("click event");
        }
        setTimeout(() => {
          setScrolling(false);
        }, 500);
      }
    }
  }

  const scrollDown = () => {
    if (currentPage === 1) {
      let currPage = document.getElementById(`page1`);
      let next1 = document.getElementById(`left-Text`);
      let next2 = document.getElementById(`right-Text`);
      let next3 = document.getElementById(`middle-image`);
      let next4 = document.getElementById(`left-image`);
      let next5 = document.getElementById(`right-image`);
      let next6 = document.getElementById(`middle-Text`);
      let next = document.getElementById(`service-page2`);

      currPage.classList.toggle("fixedDown");

      next.classList.toggle("fixedUp");

      next1.classList.toggle("fixedUp");
      next2.classList.toggle("fixedUp");
      next3.classList.toggle("fixedUp");
      next4.classList.toggle("fixedUp");
      next5.classList.toggle("fixedUp");
      next6.classList.toggle("fixedUp");
      // currPage.classList.toggle('hide')

      window.scrollBy(0, window.innerHeight);

      // next.classList.toggle('show')

      setCurrentPage(currentPage + 1);
    }
  };

  const scrollUp = () => {
    if (currentPage === 2) {
      let currPage = document.getElementById(`service-page2`);
      let prev = document.getElementById(`page1`);

      let next1 = document.getElementById(`left-Text`);
      let next2 = document.getElementById(`right-Text`);
      let next3 = document.getElementById(`middle-image`);
      let next4 = document.getElementById(`left-image`);
      let next5 = document.getElementById(`right-image`);
      let next6 = document.getElementById(`middle-Text`);
      // let next = document.getElementById(`service-page2`);
      currPage.classList.toggle("fixedDown");
      currPage.classList.toggle("fixedUp");
      currPage.classList.toggle("fixedDown");
      prev.classList.toggle("fixedDown");
      prev.classList.toggle("fixedUp");
      window.scrollTo({ top: 0, behavior: "smooth" });

      next1.classList.toggle("fixedUp");
      next2.classList.toggle("fixedUp");
      next3.classList.toggle("fixedUp");
      next4.classList.toggle("fixedUp");
      next5.classList.toggle("fixedUp");
      next6.classList.toggle("fixedUp");

      setCurrentPage(currentPage - 1);
    }
  };

  window.onwheel = function (event) {
    console.log(window.matchMedia("(max-width: 700px)").matches);
    if (!window.matchMedia("(max-width: 700px)").matches) {
      let yOffset = window.pageYOffset;
      console.log(yOffset);
      console.log(yOffset);
      //    return window.onwheel = function(){ return false; }
      if (!scrolling) {
        setScrolling(true);

        if (currentPage === 1 && event.deltaY > 0) {
          // event.preventDefault();
          // down
          scrollDown();
        } else if (
          currentPage === 2 &&
          event.deltaY < 0 &&
          yOffset <= window.innerHeight
        ) {
          // event.preventDefault();
          // up
          scrollUp();
        }
      }

      setTimeout(() => {
        setScrolling(false);
      }, 1300);
    } else {
      let yOffset = window.pageYOffset;
      console.log(yOffset);
      console.log(yOffset);
      //    return window.onwheel = function(){ return false; }
      if (!scrolling) {
        setScrolling(true);

        if (currentPage === 1 && event.deltaY > 0) {
          // event.preventDefault();
          // down
          scrollDownSmall();
        } else if (
          currentPage === 2 &&
          event.deltaY < 0 &&
          yOffset <= window.innerHeight
        ) {
          // event.preventDefault();
          // up
          scrollUpSmall();
        }
      }

      setTimeout(() => {
        setScrolling(false);
      }, 1300);
    }
  };

  const scrollDownSmall = () => {
    if (currentPage === 1) {
      let currPage = document.getElementById(`page1`);
      let next1 = document.getElementById(`left-Text`);
      let next4 = document.getElementById(`left-image`);
      let next = document.getElementById(`service-page2`);

      currPage.classList.toggle("fixedDown");
      window.scrollBy(0, window.innerHeight);

      next.classList.toggle("fixedUp");

      next1.classList.toggle("fixedUp");
      next4.classList.toggle("fixedUp");
      // currPage.classList.toggle('hide')

      // next.classList.toggle('show')

      setCurrentPage(currentPage + 1);
    }
  };

  const scrollUpSmall = () => {
    if (currentPage === 2) {
      let currPage = document.getElementById(`service-page2`);
      let prev = document.getElementById(`page1`);

      let next1 = document.getElementById(`left-Text`);
      let next4 = document.getElementById(`left-image`);
      // let next = document.getElementById(`service-page2`);
      next1.classList.toggle("fixedUp");
      next4.classList.toggle("fixedUp");
      currPage.classList.toggle("fixedDown");

      currPage.classList.toggle("fixedUp");
      currPage.classList.toggle("fixedDown");
      prev.classList.toggle("fixedDown");
      prev.classList.toggle("fixedUp");

      window.scrollTo({ top: 0, behavior: "smooth" });

      setCurrentPage(currentPage - 1);
    }
  };

  // const scrollDown=()=>{
  //     window.scrollBy(0, window.innerHeight);
  //         // window.scrollTo({
  //     //   top: 620,
  //     //   behavior: 'smooth'
  //     // });
  // }
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ height: "100%" }}
    >
      <div
        className="service-pages12"
        style={{ backgroundColor: backgroundColor }}
      >
        <div
          id="page1"
          style={{ backgroundColor: backgroundColor }}
          className="service-page"
        >
          <div id="leftPage1" className="page1 about-text-div leftPage">
            <div className="service">
              {/* <div className="mobileSizeImage">
                <img
                  width="50%"
                  src={`./assets/${img}`}
                  alt="The Fishfinger Team"
                />
              </div> */}
              <div className="innerEmployee">
                <div>
                  <h1>{name}</h1>
                  <h3>{title}</h3>
                </div>
                <div className="underline">
                  <i className="fas fa-grip-lines"></i>
                  <i className="fas fa-grip-lines"></i>
                  <i className="fas fa-grip-lines"></i>
                  <i className="fas fa-grip-lines"></i>
                  <i className="fas fa-grip-lines"></i>
                  <i className="fas fa-grip-lines"></i>
                  <i className="fas fa-grip-lines"></i>
                  <i className="fas fa-grip-lines"></i>
                </div>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div id="rightPage1" className="rightPage about-image-div">
            <img src={`./assets/${img}`} alt="The Fishfinger Team" />
          </div>
          <button
            className="about-button"
            onClick={() => {
              scrollDown();
            }}
          >
            <i className="fas fa-sort-down"></i>
          </button>
        </div>
        <div
          id="service-page2"
          style={{ backgroundColor: backgroundColor }}
          className="service-second-page"
        >
          <div className="main-brand left-middle-brand">
            <div id="left-Text" className="middle-main-txt">
              <h5>{leftTitle}</h5>
              <h2>{leftHeader}</h2>
              <p>{leftDesc}</p>
            </div>
            <div id="left-image" className="middle-main-img">
              <img src={`./assets/${leftImg}`} alt={`${leftImg}`} />
            </div>
          </div>
          <div className="main-brand">
            <div id="middle-image">
              <img src={`./assets/${middleImg}`} alt={`${middleImg}`} />
            </div>
            <div id="middle-Text">
              <h5>{middleTitle}</h5>
              <h2>{middleHeader}</h2>
              <p>{middleDesc}</p>
            </div>
          </div>
          <div className="main-brand right-middle-brand">
            <div id="right-Text" className="middle-main-txt">
              <h5>{rightTitle}</h5>
              <h2>{rightHeader}</h2>
              <p>{rightDesc}</p>
            </div>
            <div id="right-image" className="middle-main-img">
              <img src={`./assets/${rightImg}`} alt={`${rightImg}`} />
            </div>
          </div>
        </div>
      </div>
      <div id="service-page3" style={{ backgroundColor: backgroundColor }}>
        <h3>Check out some of our {checkMsg}</h3>
      </div>
      <div id="service-page4">
        <Container fluid={true}>
          <Row>
            <Col md="6" lg="4" className="main-div-grid">
              <Project1 />
            </Col>
            <Col md="6" lg="4">
              <Row className="main-div-grid">
                <Project2 />
              </Row>
              <Row className="main-div-grid">
                <Project3 />
              </Row>
            </Col>
            <Col md="6" className="hide-col">
              <Row>
                <Project4 />
              </Row>
              <Row>
                <Project5 />
              </Row>
            </Col>
            <Col md="6" lg="4" className="main-div-grid">
              <Project6 />
            </Col>
          </Row>
        </Container>
      </div>
      <div id="service-page5">
        <h2>
          Tell us about your new project!{" "}
          <i className="cta-arrow fas fa-long-arrow-alt-right"></i>
        </h2>
      </div>
      <Footer />
    </div>
  );
}

export default Service;
