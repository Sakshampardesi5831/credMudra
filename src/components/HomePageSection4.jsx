import React, { Fragment } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

const Section4Container = {
  minHeight: "80vh",
  border: "2px solid red",
};
const Section4Row = {
  minHeight: "80vh",
  border: "2px solid red",
};
const Section4Col = {
  height: "80vh",
  border: "2px solid #000",
};
const HomePageSection4 = () => {
  return (
    <div>
      <Fragment>
        <Container fluid style={Section4Container}>
          <Row style={Section4Row}>
            <Col
              style={Section4Col}
              xxl={6}
              xl={6}
              lg={6}
              md={12}
              sm={12}
              xs={12}
            >
              <div className="section4col">
                <div className="section4ColContentWrapper">
                  <h1>
                    Responsible Credit <br /> Redefined:
                  </h1>
                  <p>
                  At Credmudra, responsible credit means more than just borrowing. We're your advocates, understanding your needs and matching you with the right financial products. Our commitment spans from financial literacy to timely issue resolution, ensuring you always have a trusted partner by your side.
                  </p>
                   <div className="buttonWrapper">
                       <button>Get Match Now!</button>
                   </div>
                </div>
                
                {/* <h1>
                  Responsible Credit <br /> Redefined:
                </h1>
                <p>
                  At Credmudra, responsible credit means more than just
                  borrowing. We're your advocates, understanding your needs and
                  matching you with the right financial products. Our commitment
                  spans from financial literacy to timely issue resolution,
                  ensuring you always have a trusted partner by your side
                </p>
                <button>
                  <a href="">Get Matched Now!</a> 
                </button> */}
              </div>
            </Col>
            <Col
              style={Section4Col}
              xxl={6}
              xl={6}
              lg={6}
              md={12}
              sm={12}
              xs={12}
            ></Col>
          </Row>
        </Container>
      </Fragment>
    </div>
  );
};

export default HomePageSection4;
