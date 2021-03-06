import { createGlobalStyle } from "styled-components";
import "semantic-ui-css/semantic.min.css";
export default createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing:inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html{
  font-size: 72.5%;
  box-sizing: border-box;
  height:auto;
  --color-main: ${(props) => props.theme.colors.main};
  --color-mainDark: ${(props) => props.theme.colors.mainDark};
  --color-mainLight: ${(props) => props.theme.colors.mainLight};
  --color-mainLighter: ${(props) => props.theme.colors.mainLighter};
  --color-secondColor: ${(props) => props.theme.colors.secondColor};
  --color-yellow: ${(props) => props.theme.colors.yellow};
  --color-textColor: ${(props) => props.theme.colors.textColor};
  --color-whiteColor: ${(props) => props.theme.colors.whiteColor};
  --color-shadow: ${(props) => props.theme.colors.shadow};
  --color-errorRed: ${(props) => props.theme.colors.errorRed};

  @media ${(props) => props.theme.mediaQueries.small}{
    font-size: 60%;
  }
  @media ${(props) => props.theme.mediaQueries.smallest}{
    font-size: 55%;
  }
}

body {
  height:100%;
  width:100%;
  min-width: fit-content;
  font-family: 'Futura', sans-serif;
  font-weight: 400;
  line-height: 1.6;  
}

a,input,textarea,button {
  outline:none;
  font-family: inherit;
  text-decoration: none;

}

.row{
  width:100%;
  margin:0;
  padding:8px;
}


`;
