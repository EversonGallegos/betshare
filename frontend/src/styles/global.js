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
`;

