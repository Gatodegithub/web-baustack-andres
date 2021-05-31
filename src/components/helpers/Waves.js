import React from 'react';
import styled from "styled-components";
import responsive from "./responsive";

const WavesContainerStyled = styled.div`
  height: 80px;
  position: relative;
  overflow: hidden;
  top: ${props => props.top || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  
  svg {
    fill: white;
    position: absolute;
    height: 100%;
    ${props => props.svgTheme || ''}
  }

  ${props => props.theme || ''}
  ${responsive({md: `height: 167px;`})}
`;



const WaveTop = (props) => <svg {...props} viewBox="0 0 1403 172" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M1403 0H0V2V172L1403 172V171.998L0.000732422 171.998L0.000976562 131.532L0 2H0.00317383L29.2302 33.2646L29.2319 33.2667C58.4622 64.5343 116.919 127.066 175.376 153.866C233.834 180.666 292.292 171.732 350.751 153.866C365.365 149.399 379.98 144.374 394.595 139.349C438.438 124.274 482.282 109.199 526.126 109.199C548.048 109.199 569.969 112.967 591.891 116.736C628.428 123.017 664.964 129.299 701.501 118.132C724.884 110.985 748.268 96.6918 771.651 82.3983C806.726 60.9582 841.801 39.518 876.876 42.198C908.193 44.5909 939.51 66.2122 970.827 87.8336C997.968 106.572 1025.11 125.311 1052.25 131.532C1090.25 140.242 1128.25 124.419 1166.24 108.596C1186.71 100.075 1207.17 91.5551 1227.63 86.8651C1286.08 73.465 1344.54 91.3318 1373.77 100.265L1403 109.198V2V0Z"/>
</svg>

const WaveBottom = props => <svg {...props} viewBox="0 0 1403 172" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M0 172H1403V170V0.00012207L0 0V0.00238037L1403 0.00250244L1403 40.4681L1403 170H1403L1373.77 138.736L1373.77 138.733C1344.54 107.466 1286.08 44.9342 1227.62 18.1346C1169.17 -8.66559 1110.71 0.267792 1052.25 18.1346C1037.63 22.6013 1023.02 27.6264 1008.41 32.6514C964.562 47.7265 920.718 62.8016 876.874 62.8016C854.952 62.8016 833.031 59.0328 811.109 55.264C774.572 48.9828 738.036 42.7014 701.499 53.8682C678.116 61.0149 654.732 75.3083 631.349 89.6018C596.274 111.042 561.199 132.482 526.124 129.802C494.807 127.409 463.49 105.788 432.173 84.1665C405.032 65.428 377.891 46.6895 350.749 40.468C312.751 31.758 274.753 47.5812 236.755 63.4045C216.295 71.9248 195.835 80.445 175.374 85.135C116.916 98.5351 58.4578 80.6683 29.2283 71.7349L0 62.8018V170V172Z" />
</svg>

//////////////
// VARIANTS //
//////////////

const Top = props => <WavesContainerStyled {...props} top={0} svgTheme="left:0px;">
  <WaveTop/>
</WavesContainerStyled>

const Bottom = props => <WavesContainerStyled {...props} bottom={0} svgTheme="right:0px;">
  <WaveBottom/>
</WavesContainerStyled>

// Set - avoid warning
const Set = {
  Top,
  Bottom
}
export default Set;