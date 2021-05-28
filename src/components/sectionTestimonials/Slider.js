import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "./Slider.css";
import styled from "styled-components";
import responsive from "../helpers/responsive";
import { Title, Theme } from "../helpers";
import TryMeButton from "../actionButton/TryMeButton";
import imgSlider from "../../images/imgSlider.svg";

SwiperCore.use([Navigation, Pagination]);

const data = [
  {
    img: <img src={imgSlider} alt="imgSlider" />,
    // img: require('../../images/imgSlider.svg').default,
    title: "SINTONIZA",
    description:
      "Sintoniza logró crear una bitácora de capacitación con cientos de usuarios en minutos…",
    bg: Theme.darkmauve,
  },
  {
    img: <img src={imgSlider} alt="imgSlider" />,
    title: "segundo titulo",
    description: "segunda descripción",
    bg: Theme.darkmauve,
  },
  {
    img: <img src={imgSlider} alt="imgSlider" />,
    title: "tercer titulo",
    description: "tercera descripción",
    bg: Theme.darkmauve,
  },
  {
    img: <img src={imgSlider} alt="imgSlider" />,
    title: "cuarto titulo",
    description: "cuarta descripción",
    bg: Theme.darkmauve,
  },
];

const Slider = () => {
  const slides = data.map((el, idx) => {
    return (
      <SwiperSlide key={`slide-${idx}`} tag="li">
        <Content bg={el.bg}>
          <Figure>{el.img}</Figure>
          <FigCaption>
            <Title.H3 color={"white"}>{el.title}</Title.H3>
            <Title.P color={"white"}>{el.description}</Title.P>
            <TryMeButton to="#">PRUEBA GRATUITA</TryMeButton>
          </FigCaption>
        </Content>
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        className="SliderContainer"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination={{ type: "progressbar" }}
        spaceBetween={5}
        slidesPerView={1}
        onInit={(swiper) => {
          console.log("Swiper inicializado", swiper);
        }}
        onSlideChange={(swiper) => {
          console.log("Slider index cambio a: ", swiper.activeIndex);
        }}
        onReachEnd={() => console.log("Swiper end reached")}
      >
        {slides}
      </Swiper>
    </>
  );
};

const Content = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 200px 1fr;
  row-gap: 20px;
  padding: 1em 0;
  background-color: ${({bg}) => bg};

  ${responsive({
    md: `padding: 0;grid-template-rows: none;grid-template-columns: 1fr 1fr;height: 300px;place-items: center;`,
  })}
`;

const Figure = styled.figure`
  display: flex;
  img {
    width: 170px;
    ${responsive({ lg: `width: 260px;` })}
  }
`;

const FigCaption = styled.figcaption`
  text-align: left;
  width: 300px;
  justify-self: center;
  ${responsive({md: `justify-self: start`})}
  h3 {
    margin-bottom: 1em;
  }
  p {
    margin-bottom: 1em;
  }
`;

export default Slider;
