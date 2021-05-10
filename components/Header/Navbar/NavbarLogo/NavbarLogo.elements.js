import styled from 'styled-components';

export const LogoContainer = styled.div`
  background-color: ${(props) => props.theme.colorWhite};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 45px;
  min-height: 45px;

  svg {
    width: 23px;
    height: 16px;
  }
`;
