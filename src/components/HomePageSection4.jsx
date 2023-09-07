import React, { Fragment } from 'react'
import {Container,Col,Row} from 'react-bootstrap'

const Section4Container={
  minHeight:"100vh",
  border:"2px solid red"
}
const Section4Row={
  minHeight:"100vh",
  border:"2px solid red"
}
const Section4Col={
  height:'100vh',
  border:"2px solid #000",
  
}
const HomePageSection4 = () => {
  return (
    <div>
      <Fragment>
         <Container fluid style={Section4Container}>
          <Row style={Section4Row}>
            <Col style={Section4Col} xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                <div></div>
            </Col>
            <Col style={Section4Col} xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
            
            </Col>
           </Row>
         </Container>
      </Fragment>
    </div>
  )
}

export default HomePageSection4
