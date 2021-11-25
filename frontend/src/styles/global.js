import { css, createGlobalStyle } from 'styled-components';
import futuraBoldURL from '../assets/fonts/FuturaBold.ttf';
import futuraBookURL from '../assets/fonts/FuturaBook.ttf';
import futuraLightURL from '../assets/fonts/FuturaLight.ttf';

const fontFaces = css`
  @font-face {
    font-family: 'Futura Bold';
    src: url(${futuraBoldURL}) format('truetype');
  }
  @font-face {
    font-family: 'Futura Book';
    src: url(${futuraBookURL}) format('truetype');
  }
 @font-face {
    font-family: 'Futura Light';
    src: url(${futuraLightURL}) format('truetype');
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${fontFaces};
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Futura Light', 'Poppins', sans-serif;
  }

  body{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #3EB7AE;
    overflow-x: hidden;
    display: flex;
    justify-items: center;
  }
`;

