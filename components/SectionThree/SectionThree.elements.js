import { Device } from 'components/src/globalStyles';
import styled from 'styled-components';

export const SectionThreeContainer = styled.div`
  display: grid;
  grid-template-rows: 200px 400px;

  & h1 {
    justify-self: center;
  }
`;

export const Title = styled.h1`
  text-align: center;
  max-width: 600px;
`;

export const Slider = styled.div`
  position: relative;
  border-radius: 20px;
  box-shadow: -25px -25px 0px 0px ${(props) => props.theme.colorSecondary},
    -15px -10px 5px 0px rgba(0, 0, 0, 0.2), 10px 10px 5px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  background-color: ${(props) => props.theme.colorPrimary};

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  height: 400px;

  @media (max-width: 768px) {
    height: max-content;
    padding: 40px 0px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: none;
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; */
  }
`;

export const TextWrap = styled.div`
  text-align: left;
  color: ${(props) => props.theme.colorWhite};
  justify-self: start;

  & button {
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    justify-self: center;
  }
`;

export const PolygonLeft = styled.img`
  cursor: pointer;
  position: absolute;
  left: 40px;
  @media (max-width: 768px) {
    left: 5px;
  }
`;

export const PolygonRight = styled.img`
  cursor: pointer;
  position: absolute;
  right: 40px;
  @media (max-width: 768px) {
    right: 5px;
  }
`;

export const ImgWrap = styled.img`

  @media (max-width: 991px) {
    width: 260px;
    height: 260px;
    padding-right: 0;
  }
`;

export const TitleDesc = styled.h2`
  font-size: 40px;
`;

export const Description = styled.p`
  font-weight: 400;
`;
