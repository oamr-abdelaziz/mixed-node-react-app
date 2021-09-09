import React, { useState, useEffect } from "react";
import "./Work.scss";
import { Col, Row, Container } from "reactstrap";
import {
  Bellevee,
  CatsAndDogs,
  Comico,
  Experiments,
  Illusive,
  Interhigh,
  ListingWide,
  Redbull,
  SourceResponsibly,
  StarWars,
  TeaCircle,
  XoCola
} from "../projects/Projects";
import Footer from "../../components/Footer/Footer";

function Work(props) {
  const [state, setState] = useState("");
  const { Project1, Project2, Project3, Project4, Project5, Project6 } = props;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div id="footer-1">
        <Container fluid={true}>
          <Row>
            <Col md="6" lg="4" className="main-div-grid">
              <XoCola />
            </Col>
            <Col md="6" lg="4">
              <Row className="main-div-grid">
                <Comico />
              </Row>
              <Row className="main-div-grid">
                <CatsAndDogs />
              </Row>
            </Col>

            <Col md="6" lg="4" className="main-div-grid">
              <Bellevee />
            </Col>
          </Row>
            </Container></div>
            <div id="footer-1">
        <Container fluid={true}>
          <Row>
            <Col md="6" lg="4">
              <Row className="main-div-grid">
                <SourceResponsibly />
              </Row>
              <Row className="main-div-grid">
                <ListingWide />
              </Row>
            </Col>
            <Col md="6" lg="4" className="main-div-grid">
              <StarWars />
            </Col>
            <Col md="6" lg="4">
              <Row>
                <TeaCircle />
              </Row>
              <Row>
                <Illusive />
              </Row>
            </Col>
          </Row>
        </Container></div>
        <div id="footer-1">
        <Container fluid={true}>
          <Row>
            <Col md="6" lg="4" className="main-div-grid">
              <Interhigh />
            </Col>
            <Col md="6" lg="4" className="main-div-grid">
              <Experiments />
            </Col>
            <Col md="6" lg="4" className="main-div-grid">
              <Redbull />
            </Col>
          </Row>
        </Container>
      </div>
      <div id="footer-2">
        <h2>
          Tell us about your new project!{" "}
          <i className="cta-arrow fas fa-long-arrow-alt-right"></i>
        </h2>
      </div>
      <Footer/>
    </>
  );
}

export default Work;