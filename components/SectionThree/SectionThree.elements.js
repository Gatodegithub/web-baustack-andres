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
  /* padding: 0px 300px; */
  width: 600px;
`;

export const Slider = styled.div`
  border-radius: 20px;
  box-shadow: -25px -25px 0px 0px ${props => props.theme.colorSecondary}, -15px -10px 5px 0px rgba(0,0,0,0.20), 10px 10px 5px 0px rgba(0,0,0,0.20);
  width: 100%;
  background-color: ${props => props.theme.colorPrimary};
  height: 400px;

  display: grid;
  grid-template-columns: 100px 1fr 1fr 100px;
  align-items: center;
  justify-items: center;
`;

export const TextWrap = styled.div`
  text-align: left;
  color: ${props => props.theme.colorWhite};
  padding-right: 200px;

  & button {
    margin-top: 30px;
  }
`;

export const Polygon = styled.img`
  cursor: pointer;
`;

export const ImgWrap = styled.img`
`;

export const TitleDesc = styled.h2`
  font-size: 40px;
`;

export const Description = styled.p`
  font-weight: 400;
`;