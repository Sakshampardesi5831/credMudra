import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { CardDetails } from "../constants";
import {path1999} from '../assets/index'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
const Section3Container = {
  minHeight: "60vh",
  backgroundColor: "#fff",
  position:"relative"
};
const Section3Row = {
  width: "100%",
  padding: "20px 20px",
  // border: "2px solid red",
  marginTop: "4rem",
};
const Section3Heading = {
  textAlign: "center",
  fontSize: "60px",
  color: "#243771",
  fontWeight: "900",
};
const SliderSwiper = {
  width: "100%",
  height: "60vh",
  // border: "2px solid red",
};
const HomePageSection3 = () => {
  return (
    <Fragment>
      <Container fluid style={Section3Container}>
        <Row style={Section3Row}>
          <h1 style={Section3Heading}>Why Millions Of Indians Trust</h1>
          <h1 style={Section3Heading}>Credmudra For Short Term Loans?</h1>
        </Row>
        <Row style={SliderSwiper}>
          <Swiper
            spaceBetween={50}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            scrollbar={{ draggable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 1,
              depth: 100,
              modifier: 0,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            navigation
            pagination={false}
            modules={[EffectCoverflow, Pagination, Scrollbar, Navigation]}
            >
            {CardDetails.map((card)=>(
              <SwiperSlide key={card.cardTitle} className="swiper-slide">
              <div className="swiperSlideWrapper">
                 <div className="swiperImg">
                     <img src={card.cardImage} alt="" />
                 </div>
                 <div className="swiperTitle">
                    <h1>{card.cardTitle}</h1>
                 </div>
                 <div className="swiperDescription">
                     <p>{card.cardDescription}</p>
                 </div>
              </div>
              </SwiperSlide>
            ))}
            
            {/* <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide> */}
          </Swiper>
        </Row>
        <div className="bgImage">
            <img src={path1999} alt="" />
        </div>
      </Container>
    </Fragment>
  );
};

export default HomePageSection3;
