import React, { useState, useEffect } from 'react';
import './MainFooter.scss';
import { Col, Row, Container } from "reactstrap";

function MainFooter(props) {
    const [state, setState] = useState('');
    const {Project1,
    Project2,
    Project3,
    Project4,
    Project5,
    Project6,
  } = props;
    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <>
        {props.Teller && <div id="footer-2">
        <h2>
          Tell us about your new project!{" "}
          <i className="cta-arrow fas fa-long-arrow-alt-right"></i>
        </h2>
      </div>}
             <div id="footer-1">
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
      {!props.Teller && <div id="footer-2">
        <h2>
          Tell us about your new project!{" "}
          <i className="cta-arrow fas fa-long-arrow-alt-right"></i>
        </h2>
      </div>}
        </>
    )
}

export default MainFooter;