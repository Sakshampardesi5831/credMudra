import React, { Fragment } from 'react'
import {Container,Row,Col,} from 'react-bootstrap'
import {personalLoan,businessLoan,debt,health,bannerImage1,credBrand} from '../assets/index'
import {HomePageSection3,HomePageSection4} from '../components/index'
/**-*-------------------------------------------------------- */
  const ContainerStyle={
     padding:"10px 20px",
     minHeight:"calc(100vh - 60px)",
    //  border:"2px solid red",
  }
  const RowStyle={
    minHeight:"100vh",
    //  border:"2px solid red",
    //  padding:"10px 20px",
  }
  const ColStyle={
    height:"90vh",
    // border:"1px solid green",
    padding:"20px 20px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    gap:'30px'
  }
  const BoxesContainer={
     width:"100%",
     padding:"10px 0px",
    //  border:"2px solid yellow",
     display:"flex",
     justifyContent:"flex-start",
     alignItems:"center",
     gap:"20px"
  }
  const Boxes={
    width:"18%",
    padding:"8px 5px",
    // border:"2px solid red",
    borderRadius:"15px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    gap:"10px",
    backgroundColor:"#243771",
    transition:"all 0.5s linear"
  }
  const Boxes_text={
    color:"white",
    fontSize:"12px",
    textAlign:"center",
  }
  const SectionHeading={
    fontSize:"3.0rem",
    fontWeight:"800",
    color:"#243771",
    padding:"15px 0",
    // backgroundColor:"red",
  }
  const SectionSubHeading={
    fontSize:"22px",
    fontWeight:"600",
    color:'#243771',
  }
  const getMatchButton={
     width:"35%",
     padding:"10px 25px",
     backgroundColor:"#f7d64a",
     borderRadius:"10px",
     textAlign:"center",
  }
  const Section2Row={
     minHeight:"40vh",
    //  border:"2px solid #000",
     backgroundColor:"#243771"
  }
  const Section2Col={
    height:"40vh",
    // border:"2px solid red",
    padding:"10px 15px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:'center'
  }
  const Section2Heading={
    fontSize:'35px',
    fontWeight:"700",
    padding:"5px 15px",
    textAlign:"left",
    color:"#f7d64a"
  }
  const Section2SubHeading={
    color:"#fff",
    padding:"0px 15px",
    textAlign:'left',
    fontWeight:"700",
    
  }
  /*------------------------------------------------------------*/
const HomePage = () => {
  return (
    <Fragment>
       <Container style={ContainerStyle}>
          <Row style={RowStyle}>
             <Col style={ColStyle}  lg={6} md={12}  sm={12} xs={12} >
                  <h1 style={SectionHeading} >Your Short Term Loan Is<br/>Just a Match Away!</h1>
                  <p  style={SectionSubHeading} >On a mission of financial inclusion for every indian</p>
                  <div style={BoxesContainer}>
                      <div className='boxes' style={Boxes}>
                         <img src={personalLoan} width={50} height={50} alt="logos"/>
                         <h6 style={Boxes_text}>Personal Loan</h6>
                      </div>
                      <div  className='boxes' style={Boxes}>
                         <img src={businessLoan} width={50} height={50} alt="logos"/>
                         <h6 style={Boxes_text}>Business Loan</h6>
                      </div>
                      <div className='boxes' style={Boxes}>
                         <img src={debt} width={50} height={50} alt="logos"/>
                         <h6  style={Boxes_text}>Debt Consolidation</h6>
                      </div>
                      <div className='boxes' style={Boxes}>
                         <img src={health} width={50} height={50} alt="logos"/>
                         <h6 style={Boxes_text}>Personal Loan</h6>
                      </div>
                  </div>
                  <div style={getMatchButton}>
                    <a style={{fontWeight:"700",color:"#243771",textDecoration:"none"}} href="/">
                       Get Match Now !
                    </a>
                  </div>
             </Col>
             <Col style={ColStyle} lg={6}  md={12} sm={12}  xs={12}>
                 <div className='bannerImage'>
                     <img src={bannerImage1} alt="bannerImg"/>
                 </div>
             </Col>
          </Row>
       </Container>
       <div className='container-fluid' id='ContainerFluid'>
         <div className='row' style={ Section2Row}>
           <div style={Section2Col} className='col-lg-7  col-md-12 col-sm-12'>
                 <div  className='section2Wrapper' >
                 <h3 style={Section2Heading} >Envisioning Responsible <br /> Credit With A New Identity!</h3>
                 <h3 style={Section2SubHeading} >#NewBeginnings</h3>
                 </div> 
           </div>
           <div style={Section2Col} id='section2Col' className='col-lg-5 col-md-12 col-sm-12'>
              <img src={credBrand} alt="" />
           </div>
         </div>
       </div>
       <HomePageSection3/>
       <HomePageSection4/>
    </Fragment>
  )
}

export default HomePage